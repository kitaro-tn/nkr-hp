'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function(){
  return gulp.src('./assets/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function(){
  gulp.watch('./assets/css/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
