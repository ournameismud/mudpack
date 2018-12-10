import Siema from 'siema'
import mitt from 'mitt'
import { createEvents } from '@/core/modules/createEvents'

/** *
 * @namespace Draw
 * @class Draw
 * @desc This class handles Draws...
 * @example
 *
 *
 * See https://github.com/pawelgrzybek/siema 

 *
 * @return {Draw}
 */

export default class Carousel {
	defaults = {
		duration: 200,
		easing: 'ease-out',
		perPage: 1,
		startIndex: 0,
		draggable: true,
		multipleDrag: true,
		threshold: 20,
		loop: false,
		rtl: false
	}

	constructor(el, options) {
		this.options = {
			...this.defaults,
			...options,
			selector: el
		}

		const { nextButton, prevButton } = this.options

		if (nextButton && prevButton) {
			this.$$events = createEvents.call(this, document.body, {
				[`click ${prevButton}`]: () => {
					this.carousel.prev()
				},
				[`click ${nextButton}`]: () => {
					this.carousel.next()
				}
			})
		}

		Object.assign(this, mitt())
	}

	/** *
	 * @memberof Draw
	 * @method mount
	 * @desc Add the events
	 *
	 * @return {void}
	 */
	mount = () => {
		const { key, selector } = this.options

		if (selector.children.length) {
			this.carousel = new Siema({
				...this.options,
				onInit: () => {
					this.emit(`ui/${key}:onInit`, this)
				},
				onChange: () => {
					this.emit(`ui/${key}:onChange`, this)
				}
			})

			if (this.$$events) {
				this.$$events.attachAll()
			}
		}
	}

	/** *
	 * @memberof Draw
	 * @method unmount
	 * @desc remove the events
	 *
	 * @return {void}
	 */
	unmount = () => {
		if (this.carousel) {
			this.carousel.destroy()

			this.off('*')
			if (this.$$events) {
				this.$$events.destroy()
			}
		}
	}

	/** *
	 * @memberof Draw
	 * @method destroy
	 * @desc when the focus is outside of the menu, close it
	 *
	 * @return {void}
	 */
	destroy = () => {
		this.unmount()
	}
}
