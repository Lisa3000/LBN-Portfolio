var gulp = require('gulp'),
browserSync = require('browser-sync').create(),
imagemin = require('gulp-imagemin');


gulp.task('optimizeImages', function() {
	return gulp.src('./app/src/images/**/*')
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest("./app/dist/images"));
});


gulp.task('default', gulp.series('optimizeImages', gulp.parallel('scripts', 'styles')));