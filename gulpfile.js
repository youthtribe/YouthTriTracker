// Requires all files in gulp/ directory
require("require-dir")("./gulp");
var gulp = require("gulp");

gulp.task("default", ["eslint", "clean:www", "browserify", "sass"]); // TODO: Copy static assets
//gulp.task("default", ["eslint", "sass", "watch"]);
