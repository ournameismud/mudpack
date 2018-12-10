import Plyr from 'plyr'

const controls = `
	<div class="flex items-center justify-between absolute pin-b pin-x max-w-full z-10 pb-0 pr-0 w-full text-white ">
		<button class="max-w-50 relative z-10 bg-silver p-1 mr-1" aria-label="Play, {title}" data-plyr="play">
			<i class="icon icon--pressed icon--ui-video-play text-white absolute pin m-auto" data-play-icon role="presentation" style="width: 20px; height: 20px;">
				<svg><use class="pointer-events-none" xlink:href="#plyr-play"></use></svg>
			</i>
			<i class="icon icon--not-pressed icon--ui-video-play text-white absolute pin m-auto hidden" data-pause-icon role="presentation" style="width: 20px; height: 20px;">
				<svg><use class="pointer-events-none" xlink:href="#plyr-pause"></use></svg>
			</i>
		</button>
		<div class="flex items-center justify-between w-full c-video__controls">
			<div class="plyr__progress">
				<input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
				<progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
				<span role="tooltip" class="plyr__tooltip">00:00</span>
			</div>
			<div class="plyr__time plyr__time--current ml-1 mr-0-5" aria-label="Current time">00:00</div>
			<div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>
			<button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
				<svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>
				<svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>
				<span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>
				<span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>
			</button>
			<div class="plyr__volume">
				<input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume">
			</div>
			<button type="button" class="plyr__control" data-plyr="fullscreen">
				<svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg>
				<svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg>
				<span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span>
				<span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span>
			</button>
		</div>
	</div>`

/** *
 * @class VideoPlayer
 * @desc Handles the videos... via plyr
 *
 * @example /04-components/video
 *
 * @return {Behaviour}
 */
export default class VideoPlayer {
	constructor(el) {
		this.$el = el

		this.player = new Plyr(this.$el, {
			controls,
			settings: [],
			captions: { active: false }
		})
	}

	mount = () => {
		this.player.on('play', () => {
			const $play = this.$el.querySelector('[data-play-icon]')
			const $pause = this.$el.querySelector('[data-pause-icon]')

			$play.classList.add('hidden')
			$pause.classList.remove('hidden')
		})

		this.player.on('pause', () => {
			const $play = this.$el.querySelector('[data-play-icon]')
			const $pause = this.$el.querySelector('[data-pause-icon]')

			$play.classList.remove('hidden')
			$pause.classList.add('hidden')
		})
	}

	unmount = () => {
		this.player.destroy()
	}
}
