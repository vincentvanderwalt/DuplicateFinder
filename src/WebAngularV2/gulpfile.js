var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sequence = require('gulp-sequence'),
    project = require('./project.json'),
    clean = require('gulp-clean');

var paths = {
    webroot: './' + project.webroot + '/',
    bower: './bower_components/',
    source: './scripts/'
};

paths.appjs = [paths.source + '*.js'];
paths.vendorjs = [paths.bower + 'jquery/dist/jquery.js',paths.bower + 'bootstrap/dist/js/bootstrap.js'];
paths.css = [paths.bower + "bootstrap/dist/css/bootstrap.min.css"];
paths.destcss = paths.webroot + "style";
paths.destjs = paths.webroot + "js";

gulp.task("clean:js", function () {
    return gulp.src([paths.destjs]).pipe(clean());
});

gulp.task("clean:css", function () {
    return gulp.src([paths.destcss]).pipe(clean());
});

gulp.task("build:css", function () {
    return gulp.src(paths.css)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(paths.destcss))
});

gulp.task("build:app-js", function () {
    return gulp.src(paths.appjs)
       .pipe(concat("app.js"))
       .pipe(gulp.dest(paths.destjs));
})

gulp.task("build:vendor-js", function () {
    return gulp.src(paths.vendorjs)
       .pipe(concat("vendor.js"))
       .pipe(gulp.dest(paths.destjs));
})