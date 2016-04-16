// Requires all files in gulp/ directory
require('require-dir')('./gulp');
var gulp = require('gulp');

gulp.task('default', ['sass', 'watch']);
