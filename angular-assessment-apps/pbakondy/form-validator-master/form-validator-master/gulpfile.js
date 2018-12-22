var gulp = require('gulp');
var eslint = require('gulp-eslint');
var zip = require('gulp-zip');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var rename = require("gulp-rename");
var runSequence = require('run-sequence');
var del = require('del');
var uglify = require('gulp-uglify');
var karma = require('karma').server;


var paths = {
  jslint: [
    'src/*.js'
  ],
  backup: ['**/*', '.*',
    '!bower_components/**/*', '!bower_components',
    '!node_modules/**/*', '!node_modules',
    '!backup/**/*', '!backup'
  ]
};


gulp.task('lint', function () {
  return gulp.src(paths.jslint)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failOnError());
});


gulp.task('backup', function () {
  var ts = (new Date()).toJSON().replace(/:/g, '-');
  return gulp.src(paths.backup)
      .pipe(zip('form-validator-' + ts + '.zip'))
      .pipe(gulp.dest('backup'));
});

gulp.task('sass', function () {
  gulp.src('example/css/form.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'ie 9'))
    .pipe(gulp.dest('example/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(['example/css/*.scss'], ['sass']);
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('example/index.html')
    .pipe(connect.reload());
});

gulp.task('web:watch', function () {
  gulp.watch(['example/*.html', 'example/**/*.js', 'example/**/*.css'], ['html']);
});


gulp.task('compress-js', function() {
  return gulp.src('dist/validator.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-copy-assets', function() {
  return gulp.src('src/validator.js')
    .pipe(gulp.dest('dist'));
});

gulp.task('build-clean', function (cb) {
  del(['dist'], cb);
});

gulp.task('build', function(callback) {
  runSequence('build-clean', 'build-copy-assets', 'compress-js', callback);
});

gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('default', ['connect', 'web:watch', 'sass:watch']);
