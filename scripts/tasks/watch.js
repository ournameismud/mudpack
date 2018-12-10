const gulp = require('gulp')
const staticFiles = require('./static')
const scss = require('./scss')
const { getStaticPaths, getSrcPaths } = require('../utils/paths')

const watch = done => {
	gulp.watch(getStaticPaths('**/**'), gulp.series(staticFiles))
	gulp.watch(getSrcPaths(global.PATHS.scss.src), gulp.series(scss))

	done()
}

module.exports = watch
