var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

var jsFiles = './js/*';
var cssFiles = './css/*';

gulp.task('buildJs', function(){
	return gulp.src(jsFiles)
	    .pipe(concat('all.js'))
		.pipe(uglify())
	    .pipe(gulp.dest('./dist/js'));
});

gulp.task('buildCss', function () {
	return gulp.src(cssFiles)
		.pipe(concat('style.css'))
		.pipe(cleanCSS({compatibility: 'ie9'}))
		.pipe(gulp.dest('./dist/css/'))
});

gulp.task('watch', function(){
	gulp.watch(jsFiles, ['buildJs']);
	gulp.watch(cssFiles, ['buildCss']);
});


gulp.task('default', ['buildJs', 'buildCss']);