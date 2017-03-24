var gulp=require('gulp'),
    less=require('gulp-less'),
    cssmin=require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');

gulp.task('testLess', function () {
   gulp.src('src/less/*.less')
       .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
       .pipe(sourcemaps.init())
       .pipe(less())
       .pipe(sourcemaps.write())
       .pipe(gulp.dest('src/css'))
       .pipe(cssmin())
       .pipe(gulp.dest('dist/css'));
});

gulp.task('testWatch', function () {
   gulp.watch('src/**/*.less',['testLess']);
});