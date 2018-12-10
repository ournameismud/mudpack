import Behaviour from '@/core/Behaviour'
import ScrollOut from 'scroll-out'
import { TweenLite, Power3, CSSPlugin } from 'gsap/all'

const plugins = [CSSPlugin]
log(plugins)

export default class Backgrounds extends Behaviour {
	mount = () => {
		const $backgroundEl = document.getElementById('background')
		const rightBgArray = [...document.querySelectorAll('.c-service__bg')]
		this.soBackground = ScrollOut({
			scope: this.$el,
			threshold: 0.5,
			targets: '[data-background]',
			onShown: element => {
				/* Triggered when an element is shown */
				TweenLite.to($backgroundEl, 1, {
					backgroundColor: element.dataset.bgColour,
					ease: Power3.easeOut
				})

				rightBgArray.forEach($bgElement => {
					TweenLite.to($bgElement, 1, {
						backgroundColor: element.dataset.bgColour,
						ease: Power3.easeOut
					})
				})
			}
		})

		this.soReveals = ScrollOut({
			scope: this.$el,
			threshold: 0.3,
			targets: '[data-scroll]',
			once: true
		})
	}

	unmount = () => {
		if (this.soBackground) this.soBackground.teardown()
		if (this.soReveals) this.soReveals.teardown()
	}
}
