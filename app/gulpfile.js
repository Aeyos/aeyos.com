var gulp = require('gulp'),
		concat = require('gulp-concat'),
		connect = require('gulp-connect'),
		del = require('del'),
		imagemin = require('gulp-imagemin'),
		less = require('gulp-less'),
		livereload = require('gulp-livereload'),
		sourcemaps = require('gulp-sourcemaps'),
		uglify = require('gulp-uglify');

var paths = {
	scripts: './scripts/**/*.js',
	images: './images/*',
	styles: './styles/*.less',
	index: './**/*.html'
};

// TASKS

gulp.task('clean', function(cb) {
	del(['build'], cb);
});

gulp.task('connect', function() {
	connect.server({
//		root: '.',
		livereload: true
	});
});
 
gulp.task('html', function () {
	return gulp.src(paths.index)
		.pipe(connect.reload());
});

gulp.task('images', ['clean'], function() {
	return gulp.src(paths.images)
		// Pass in options to the task
		.pipe(imagemin({optimizationLevel: 5}))
		.pipe(gulp.dest('build/img'));
});

gulp.task('less', function() {
	return gulp.src(paths.styles)
		.pipe(less())
		.pipe(gulp.dest('styles'))
		.pipe(connect.reload());
});

gulp.task('scripts', ['clean'], function() {
	return gulp.src(paths.scripts,{base:'scripts'})
		.pipe(sourcemaps.init())
			.pipe(uglify())
			.pipe(concat('all.min.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/js'))
		.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.images, ['images']);
	gulp.watch(paths.styles, ['less']);
	gulp.watch(paths.index, ['html']);
});
 
gulp.task('default', ['connect', 'watch', 'scripts', 'images', 'less', 'html']);