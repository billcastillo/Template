// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('./lib/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src([
        'js/plugins.js',
        'js/main.js'
        ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('./lib/scss/*.scss', ['sass']);
    gulp.watch('./lib/stylus/*.styl', ['stylus']);
});

// Gulp Stylus
gulp.task('stylus', function () {
  gulp.src('./lib/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./lib/scss/*.scss", ['sass']);
    gulp.watch("./lib/stylus/*.styl", ['stylus']).on('change', browserSync.reload);
    gulp.watch("./dist/js/*.js", ['scripts']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'stylus', 'serve', 'watch']);