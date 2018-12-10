import Behaviour from '@/core/Behaviour'
import ScrollOut from 'scroll-out'

export default class ScrollAnim extends Behaviour {
	mount = () => {
		this.so = ScrollOut({
			scope: this.$el,
			threshold: 0.25,
			once: true
		})
	}

	unmount = () => {
		if (this.so) this.so.teardown()
	}
}
