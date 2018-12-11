var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
concat = require('gulp-concat'),
cssnano = require('cssnano');

gulp.task('styles', function() {
	return gulp.src(['./app/src/styles/vendor/**/*.css', './app/src/styles/styles.css'])
		.pipe(postcss([autoprefixer, cssnano]))
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('./app/dist/styles'));
});
