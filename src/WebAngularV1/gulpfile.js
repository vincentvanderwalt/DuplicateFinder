var gulp = require('gulp');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var print = require('gulp-print');
var angularFilesort = require('gulp-angular-filesort');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var sequence = require('gulp-sequence');

var basePath = {
    src: "app/",
    dest: "wwwroot/",
    bower: "bower_components/"
};

var srcPaths = {
    scripts: basePath.src + "js/",
    templates: basePath.src + "htmltemplates/"
};

var destPaths = {
    styles: basePath.dest + "style/",
    scripts: basePath.dest + "js/",
    templates: basePath.dest + "templates/"
};

gulp.task("clean-dest", function () {
    return gulp.src([destPaths.styles, destPaths.scripts, destPaths.templates], { read: false })
      .pipe(clean());
});

gulp.task("deploy-css", function () {
    return gulp.src([basePath.bower + 'bootstrap/dist/css/bootstrap.min.css'])
       .pipe(concat('styles.css'))
        .pipe(gulp.dest(destPaths.styles));
});

gulp.task("deploy-domain-script", function () {
    return gulp.src([basePath.src + 'domain/*.js'])
        .pipe(print())
        .pipe(concat("domain.js"))
        .pipe(gulp.dest(destPaths.scripts + "app"));
});

gulp.task("deploy-app-script", function () {
    return gulp.src([basePath.src + '*.js', basePath.src + 'home/*.js', basePath.src + 'common/services/*.js'])
        .pipe(concat("app.js"))
        .pipe(gulp.dest(destPaths.scripts + "app"));
});

gulp.task("deploy-vendor-scripts", function () {
    return gulp.src([basePath.bower + 'angular-route/angular-route.js',
                                 basePath.bower + 'angular/angular.js',
                                 basePath.bower + 'bootstrap/dist/js/bootstrap.js',
                                 basePath.bower + 'jquery/dist/jquery.js'])
        .pipe(angularFilesort())
        .pipe(concat("vendor.js"))
        .pipe(gulp.dest(destPaths.scripts + "vendor"));
});

gulp.task("deploy-htmltemplate", function () {
    return gulp.src(basePath.src + "home/default.html")
    .pipe(gulp.dest(basePath.dest + 'templates/home/'));
});


gulp.task('default', sequence("clean-dest", "deploy-htmltemplate", "deploy-vendor-scripts", "deploy-app-script", "deploy-domain-script", "deploy-css"));