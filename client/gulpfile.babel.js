var gulp = require('gulp');
var watch = require('gulp-watch');
var webpack = require('webpack-stream');

var webpackConfig = require('./webpack.config.js');

gulp.task('default', function() {
  return gulp.src('src/**/*.js')
    .pipe(webpack({
      config : webpackConfig
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['default']);
});

