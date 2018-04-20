// Load gulp and required tools
var gulp            = require('gulp'),
    babel           = require('gulp-babel'),
    del             = require('del'),
    sass            = require('gulp-sass'),
    sassLint        = require('gulp-sass-lint'),
    sourcemaps      = require('gulp-sourcemaps'),
    eslint          = require('gulp-eslint'),
    debug           = require('gulp-debug'), // Debug Vinyl file streams to see what files are run through your Gulp pipeline
    globbing        = require('gulp-css-globbing'), // Expands CSS @import statements containing globs with the full paths. Useful with pre-processors like Sass.
    concat          = require('gulp-concat'),
    uglify          = require('gulp-uglify'),
    rename          = require('gulp-rename'),
    changed         = require('gulp-changed'), // By default it's only able to detect whether files in the stream changed.
    minify          = require('gulp-minify'),
    imagemin        = require('gulp-imagemin');




// The default task.
gulp.task('default', [ ]);
