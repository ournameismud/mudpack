import fromTo from 'mud-from-to'

/** *
 * @namespace ScrollTo
 * @class ScrollTo
 * @desc This class handles ScrollTos...
 * @example
 *
 * js:
 *
 * new ScrollTo(document.getElementById('test'), {}, 'test-node').mount()
 *
 * Required markup:
 *
 * <a href="#test" data-ui="ScrollTo" data-ui-options='{}' data-ui-key="menu-ScrollTo"></a>
 * <div id="test"></div>
 *
 * maybe?.. maybe data-attributes...
 * hmmm... nah.. id me thinks
 *
 * @param {HTMLElement} el - node to bind to
 * @param {Object} options - options
 * @param {String} key - key name
 *
 * @return {ScrollTo}
 */

export default class ScrollTo {
	defaults = {}

	constructor(el, options, key) {
		this.options = { ...this.defaults, ...options }
		this.key = key

		this.$el = el
		this.$target = document.querySelector(this.$el.getAttribute('href'))
		// bind the dom events
	}

	/** *
	 * @memberof ScrollTo
	 * @method mount
	 * @desc Add the events
	 *
	 * @return {void}
	 */
	mount = () => {
		this.$el.addEventListener('click', this.onClick)
	}

	/** *
	 * @memberof ScrollTo
	 * @method unmount
	 * @desc remove the events
	 *
	 * @return {void}
	 */
	unmount = () => {
		this.$el.removeEventListener('click', this.onClick)
	}

	/** *
	 * @memberof ScrollTo
	 * @method onClick
	 * @desc the click event...
	 * @param {Object} e : the event object
	 * @param {HTMLElement} elm : the node clicked
	 *
	 * @return {void}
	 */
	onClick = e => {
		e.preventDefault()
		const { top } = this.$target.getBoundingClientRect()

		fromTo(
			{
				start: window.pageYOffset,
				end: top - 60,
				duration: 1000,
				easing(t, b, c, d) {
					if ((t /= d / 2) < 1) return c / 2 * t * t + b // eslint-disable-line no-cond-assign, no-param-reassign
					return -c / 2 * (--t * (t - 2) - 1) + b // eslint-disable-line no-plusplus, no-param-reassign
				}
			},
			v => window.scrollTo(0, v)
		)
	}
}
