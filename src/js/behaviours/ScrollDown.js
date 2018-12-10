import Behaviour, { mix } from '@/core/Behaviour'
import scrollToElement from 'scroll-to-element'
import scrollTo from 'scroll-to'
import { EventsMixin, ScreenMixin } from '@/core/modules'

export default class scrollDown extends mix(Behaviour).with(
	EventsMixin,
	ScreenMixin
) {
	mount = () => {
		this.$$events.attachAll()

		// log(this)
		// this.$$screen.on('window:resize', (props) => {
		// 	log(props)
		// })
	}

	events = {
		'click [data-scroll-down]': 'clickHandler'
	}

	clickHandler = (e, $el) => {
		e.preventDefault()

		$el.classList.add('opacity-0')

		const $target = $el.dataset.target
		if ($target)
			scrollToElement($target, {
				ease: 'inOutExpo',
				duration: 1000
			})

		// const currScrollPos = document.documentElement.scrollTop
		// const height = this.$$screen.height
		// const newScrollPos = currScrollPos + height

		// if (newScrollPos < document.documentElement.scrollHeight) {
		// 	scrollTo(0, newScrollPos, {
		// 		ease: 'inOutExpo',
		// 		duration: 1000
		// 	})
		// }
	}
}
