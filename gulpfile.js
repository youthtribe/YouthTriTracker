// Requires all files in gulp/ directory
require("require-dir")("./gulp");
var gulp = require("gulp");
var runSequence = require('run-sequence');

// Partial Tasks
gulp.task("copy", ["copy:views", "copy:index", "copy:resources", "copy:images", "copy:lib"]);
gulp.task("build", ["browserify", "sass", "copy"]);

// Main Tasks
gulp.task("default", function() {
	runSequence("clean:www", "eslint", "build");
});
