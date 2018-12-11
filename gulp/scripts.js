var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify');

gulp.task('scripts', function () {
	return gulp.src(['./app/src/scripts/vendor/jquery/jquery.min.js', './app/src/scripts/vendor/bootstrap/bootstrap.bundle.min.js', './app/src/scripts/vendor/jquery/jquery.easing.min.js', './app/src/scripts/modules/**/*.js'])
	  .pipe(concat('App.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./app/dist/scripts'));
});