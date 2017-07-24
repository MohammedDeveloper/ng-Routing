/**
 * Gulp file for bundling
 */

var gulp = require('gulp'),
    bundle = require('gulp-bundle-assets'),
    deletefile = require('gulp-delete-file');

/**
 * Bundle the content
 */
gulp.task('content', function () {
    return gulp.src('./bundle.config.js')
        .pipe(bundle()).pipe(bundle.results({
            pathPrefix: '/public/'
        }))
        .pipe(gulp.dest('./public'));
});

/**
 * Clean before start
 */
gulp.task('delete-file', function () {
    gulp.src([
        './public/images/**/**/*.{png,svg,jpg}',
        './public/maps/**/*.map',
        './public/**/*.css',
        './public/**/*.scss',
        './public/**/*.js',
        './public/**/*.less'
    ]).pipe(deletefile({
        deleteMatch: false
    }))
});



/// Tasks configured here...
gulp.task('bundle', ['delete-file', 'content']);