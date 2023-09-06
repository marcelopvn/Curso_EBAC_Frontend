const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')



function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'))
}


function comprimeImagens() {
    return gulp.src('./source/styles/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}


function comprimeJavaScript() {
    return gulp.src('./source/styles/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}




exports.default = function() {
    gulp.watch('./source/styles/main.scss', {ignoreInitial: false} , gulp.series(compilaSass))
    gulp.watch('./source/styles/images/*', {ignoreInitial: false} , gulp.series(comprimeImagens))
    gulp.watch('./source/styles/scripts/*.js', {ignoreInitial: false} , gulp.series(comprimeJavaScript))
}
