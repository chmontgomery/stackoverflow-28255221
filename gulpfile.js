var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('uglify-js', function () {
    // Fetch CSS files
    return gulp.src(['assets/js/*.js', '!assets/js/*.min.js'])

        // Start source map
        .pipe(sourcemaps.init({loadMaps: true}))

        // Uglify JS
        .pipe(uglify())

        // Add file suffix
        //.pipe(rename({suffix: '.min'}))

        // Save source map
        .pipe(sourcemaps.write())

        // Save output to destination folder
        .pipe(gulp.dest('public/js/'));
});
