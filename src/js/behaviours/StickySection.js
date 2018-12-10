import Behaviour, { mix } from '@/core/Behaviour'
import stickybits from 'stickybits'
// import SponLax from 'sponlax'
import ScrollOut from 'scroll-out'
import Siema from 'siema'
import { EventsMixin, ScreenMixin } from '@/core/modules'

export default class StickySection extends mix(Behaviour).with(
	EventsMixin,
	ScreenMixin
) {
	siema = null

	mount = () => {
		this.$parentEl = this.$el
		this.$childEl = this.$el.querySelector('.c-group-factors__header')

		// this.$$eventBus.emit('window:resize')
	}

	createScrollOut = () => {
		this.$stickySectionEl = stickybits(this.$childEl)

		const $headerTextContainer =
			this.$el.querySelector('.c-group-factors__header-container') || null
		const $sectionNav = this.$el.querySelector('.c-group-factors__nav') || null

		this.so = ScrollOut({
			scope: this.$el,
			onShown: element => {
				// Remove all visible classes
				;[...this.$el.querySelectorAll('[data-scroll-item]')].forEach(item =>
					item.classList.remove('is-visible')
				)

				// Add visible class to corresponding element in viewport
				const $visibleTextEl = this.$el.querySelector(
					`[data-scroll-item="${element.id}"]`
				)
				if ($visibleTextEl) $visibleTextEl.classList.add('is-visible')

				/* Triggered when an element is shown */
				const direction =
					document.documentElement.dataset.scrollDirY === '1' ? 1 : -1
				const $activeNavLink =
					document.querySelector('.c-group-factors__nav-link.is-active') || null
				if ($activeNavLink) $activeNavLink.classList.remove('is-active')

				const $newActiveLink =
					document.querySelector(
						`.c-group-factors__nav-link[href="#${element.id}"]`
					) || null

				if ($newActiveLink) $newActiveLink.classList.add('is-active')

				if (
					(element.id === 'factor-1' && direction === 1) ||
					(element.id === 'factor-5' && direction === -1) ||
					(element.id === 'factor-4' && direction === -1)
				) {
					$sectionNav.classList.add('is-visible')

					if ($headerTextContainer)
						$headerTextContainer.classList.add('is-reduced')
				}
			},
			onHidden: element => {
				/* Triggered when an element is hidden */
				const direction =
					document.documentElement.dataset.scrollDirY === '1' ? 1 : -1

				if (
					(element.id === 'factor-0' && direction === 1) ||
					(element.id === 'factor-4' && direction === 1)
				) {
					$sectionNav.classList.remove('is-visible')
				}

				if (element.id === 'factor-1' && direction === -1) {
					$headerTextContainer.classList.remove('is-reduced')
					$sectionNav.classList.remove('is-visible')

					// Remove all visible classes
					;[...this.$el.querySelectorAll('[data-scroll-item]')].forEach(item =>
						item.classList.remove('is-visible')
					)
				}
			}
		})

		return this.so
	}

	paginationHandler = (e, $el) => {
		e.preventDefault()
		;[...document.querySelectorAll('.c-group-factors__nav-link')].forEach(
			$item => $item.classList.remove('is-active')
		)

		$el.classList.add('is-active')

		const { index } = $el.dataset
		if (this.siema && index) this.siema.goTo(index)
	}

	events = {
		'click .c-group-factors__nav-link': 'paginationHandler'
	}

	screens = {
		'(max-width: 767px)': props => {
			if (props.match) {
				log('1111')
				if (this.$stickySectionEl) this.$stickySectionEl.cleanup()
				if (this.so) this.so.teardown()

				if (!this.siema) {
					this.siema = new Siema({
						selector: '.siema',
						perPage: 1,
						draggable: true,
						loop: false,
						prevButton: false,
						nextButton: false
					})

					this.$$events.attachAll()
				}

				log('siema no exist')
			} else {
				log('2222')
				if (!this.so) this.createScrollOut()

				if (this.siema) {
					this.siema.destroy(true)
					this.siema = null
				}
			}
		}
	}

	unmount = () => {
		if (this.$stickySectionEl) this.$stickySectionEl.cleanup()
		if (this.so) this.so.teardown()
	}
}

// window.addEventListener('resize', () => {
//   stickybitsInstancetoBeUpdated.update();
// });
