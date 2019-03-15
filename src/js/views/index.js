import { TweenLite, CSSPlugin } from 'gsap/all'
import eventBus from '@/core/modules/eventBus'

const plugins = [CSSPlugin]
console.log(plugins)

const view = {
	async onEnter({ next, ...rest }) {
		window.scrollTo(0, 0)

		const { newHtml } = rest

		TweenLite.set([newHtml], {
			opacity: 0
		})

		TweenLite.to([newHtml], 0.5, {
			opacity: 1,
			onComplete: () => {
				next()
			}
		})
	},

	async onExit({ next, ...rest }) {
		const { oldHtml } = rest

		TweenLite.to([oldHtml], 0.5, {
			opacity: 0,
			onComplete: () => {
				eventBus.emit('menu:close')

				next()
			}
		})
	}
}

export default [
	{
		path: '/',
		name: 'home-page',
		view
	},
	{
		path: '*',
		name: 'default',
		view
	}
]
