const gulp = require('gulp')
const browserSync = require('browser-sync')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const htmlreplace = require('gulp-html-replace')
const middleware = require('../webpack/middleware')
const devConfig = require('../webpack/config.dev')

const cacheTags = () => {
	const {
		PATHS: {
			cacheTag: { file, dir }
		}
	} = global

	return gulp
		.src(path.resolve(process.env.PWD, dir, file))
		.pipe(
			htmlreplace(
				{
					cms: {
						src: PRODUCTION ? `.${global.TASK.stamp}` : '',
						tpl: '{% set stamp = "%s" %}'
					}
				},
				{
					keepBlockTags: true
				}
			)
		)
		.pipe(gulp.dest(path.resolve(process.env.PWD, dir)))
}

const serverProxy = done => {
	const compiler = webpack(merge(global.WEBPACK_CONFIG, devConfig))

	const {
		PATHS: { proxy },
		TASK: { server }
	} = global

	browserSync.init({
		...middleware(compiler),
		proxy,
		...server
	})

	done()
}

const cms = () =>
	gulp.src(
		getCraftPath(
			path.join('templates/', global.PATHS.twig).pipe(browserSync.stream())
		)
	)

module.exports = {
	serverProxy,
	cacheTags,
	cms
}
