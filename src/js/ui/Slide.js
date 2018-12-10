import SponSlide from 'spon-slide'

/** *
 * @class Slide
 * @desc Handles the hero carousels - via spon-slide
 *
 * @example /04-components/carousel
 *
 * @return {Behaviour}
 */
export default class Slide {
	constructor(el, options) {
		this.$el = el
		this.options = { ...this.defaults, ...options }
	}

	defaults = {
		selector: '[data-slide-item]',
		activeClass: 'is-current',
		previousButton: '[data-slide-prev]',
		nextButton: '[data-slide-next]',
		dots: true,
		paginationWrapper: '<div class="c-carousel__dots"></div>',
		paginationButtons: slides =>
			slides.map(
				(_, index) =>
					`<button data-dot><span class="visuallyhidden">slide ${index}</span></button>`
			)
	}

	mount() {
		const slides = this.$el.querySelectorAll('[data-slide-item]')

		if (slides.length < 2) return

		this.slide = new SponSlide(this.$el, this.options)

		this.slide.init()
	}

	unmount() {
		if (this.slide) this.slide.destroy()
	}
}
