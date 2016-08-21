var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var ts = require('gulp-typescript');
var merge = require('merge2');
var less = require('gulp-less');
var path = require('path');
var cache = require('gulp-cached');
var requirejsOptimize = require('gulp-requirejs-optimize');
var rename = require('gulp-rename');

gulp.task('build-less', function () {
  return gulp.src('views/**/*.less')
    .pipe(cache('less'))
    .pipe(less())
    .pipe(gulp.dest('views'));
});

var tsProject = ts.createProject({
      typescript: require('typescript'),
      declaration: false,
      noExternalResolve: true,
      target: "es5",
      module: "amd",
      emitDecoratorMetadata: true,
      "experimentalDecorators": true
    });

gulp.task('build-ts', function () {
  var tsResult = gulp.src(myPaths.ts,
    { base: "./" })
    .pipe(cache('ts'))
    .pipe(ts(tsProject));

  return merge([
    tsResult.dts.pipe(gulp.dest('./')),
    tsResult.js.pipe(gulp.dest('./'))
  ]);
});

gulp.task('build', ['build-less', 'build-ts'], function() {});

var myPaths = {
  ts: ['./views/**/*.ts', './typings/**/*.d.ts'],
  js: "./views/**/*.js",
  html: "./views/**/*.html",
  css: "./views/**/*.css",
  less: "./views/**/*.less"
}

function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', ['build'], function () {
  gulp.watch('./views/**/*.ts', ['build-ts']).on('change', reportChange);
  gulp.watch(myPaths.less, ['build-less']).on('change', reportChange);
});
