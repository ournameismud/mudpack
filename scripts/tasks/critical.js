const critical = require('critical')
const path = require('path')
const del = require('del')
const { getCraftPath, getPublicPath } = require('../utils/paths')

const criticalCSS = async () => {
	const {
		PATHS: { critical: paths, proxy },
		TASK: { critical: options }
	} = global

	await del([getCraftPath('templates/inline-css')])

	function criticalPromise({ url, css }) {
		return new Promise((resolve, reject) => {
			critical
				.generate({
					inline: false,
					src: `${proxy}${url}`,
					css: [getPublicPath(`dist/css/style.${global.TASK.stamp}.css`)],
					dest: path.resolve(
						process.env.PWD,
						`./deploy/templates/inline-css/${css}.css`
					),
					...options
				})
				.catch(e => {
					reject(e)
				})
				.then(resolve)
		})
	}

	return paths.reduce(async (previousPromise, nextPath) => {
		await previousPromise
		return criticalPromise(nextPath)
	}, Promise.resolve())
}

module.exports = criticalCSS
