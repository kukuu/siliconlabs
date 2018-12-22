var gulp = require('gulp');
var eslint = require('gulp-eslint');
var useref = require('gulp-useref');
var zip = require('gulp-zip');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var del = require('del');
var runSequence = require('run-sequence');
var merge = require('merge-stream');
var minifyHTML = require('gulp-minify-html');

var paths = {
  jslint: [
    './js/**/*.js'
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

gulp.task('useref', function(done) {
  var assets = useref.assets();
  gulp.src('index.html')
    .pipe(assets)
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('./dist'))
    .on('end', done);
});

gulp.task('backup', function () {
  var ts = (new Date()).toJSON().replace(/:/g, '-');
  return gulp.src(paths.backup)
      .pipe(zip('cart-' + ts + '.zip'))
      .pipe(gulp.dest('backup'));
});

gulp.task('sass', function () {
  gulp.src('css/cart.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'ie 9'))
    .pipe(gulp.dest('css'));
});


gulp.task('sass:watch', function () {
  gulp.watch(['css/*.scss'], ['sass']);
});


gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('web:watch', function () {
  gulp.watch(['./*.html', './**/*.js', './**/*.css'], ['html']);
});

gulp.task('compress-js', function() {
  return gulp.src('dist/js/script.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('minify-html', function() {
  // https://www.npmjs.com/package/gulp-minify-html
  var opts = { };

  return gulp.src('dist/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('dist/'));
});

gulp.task('minify-css', function() {
  return gulp.src('dist/css/style.css')
    .pipe(minifyCss({compatibility: 'ie9'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('build-copy-assets', function() {
  return gulp.src('templates/*.html').pipe(gulp.dest('dist/templates'));
});

// https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md
gulp.task('build-clean', function (cb) {
  del(['dist'], cb);
});

gulp.task('build', function(callback) {
  runSequence('build-clean', 'useref',
    ['compress-js', 'minify-css', 'minify-html', 'build-copy-assets'], callback);
});

gulp.task('default', ['connect', 'web:watch', 'sass:watch']);
