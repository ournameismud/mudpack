import Behaviour from '@/core/Behaviour'
import Headroom from 'headroom.js'
// import SponDraw from 'spon-draw'

export default class StickyHeader extends Behaviour {
	mount = () => {
		// log('mounted')
		this.headroom = new Headroom(this.$el)
		// this.offCanvasMenu = new SponDraw({
		// 	openButton: '[data-open-menu]',
		// 	overlay: document.getElementById('site-menu'),
		// 	contents: document.getElementById('menu-inner'),
		// 	closeButton: false,
		// 	init: true,
		// 	buttonActiveClass: 'o-burger--active',
		// 	overlayVisibleClass: 'is-visible',
		// 	overlayAnimationClass: 'is-animating',
		// 	transition: true,
		// 	animationType: 'transition',
		// 	before: null
		// })
		this.headroom.init()
		// this.offCanvasMenu.init()
	}
}
