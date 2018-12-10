import Behaviour from '@/core/Behaviour'
import Validate from '@/ui/Validation'
import { TweenLite, CSSPlugin } from 'gsap/all'
import domify from 'domify'

const plugins = [CSSPlugin] // eslint-disable-line

const confirmMessage = `<h4 class="h6 c-product-intro__added">
													<span class="flex items-center justify-center py-0-5">
														<i class="icon icon--ui-tick mr-0-5 -mt-px">
															<svg>
																<use class="no-barba" xlink:href="#ui-tick" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
															</svg>
														</i>
														Form sent!
													</span>
												</h4>`

export default class ContactForm extends Behaviour {
	mount = () => {
		const validator = new Validate(this.$el, {
			rules: {
				fromEmail: {
					presence: {
						message: "Email can't be blank"
					},
					email: true
				},

				'message[name]': {
					presence: {
						message: "Name can't be blank"
					}
				}
			},
			ajax: true
		})

		validator.mount()

		validator.on('submit:success', ({ data }) => {
			fetch('/', {
				method: 'POST',
				body: data
			})
				.then(response => {
					if (response.ok) {
						const $messageContainer = document.getElementById('success-message')

						$messageContainer.appendChild(domify(confirmMessage))

						TweenLite.to('.o-form__content', 0.25, {
							opacity: 0
						})

						TweenLite.to($messageContainer, 0.75, {
							opacity: 1,
							delay: 0.25
						})
					}
				})
				.catch(error => log('Error:', error))
		})
	}
}
