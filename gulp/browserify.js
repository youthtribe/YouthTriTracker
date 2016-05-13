var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var uglify = require("gulp-uglify");
var gutil = require("gulp-util");
var tap = require("gulp-tap");
var buffer = require("gulp-buffer");
var chalk = require("chalk");

gulp.task("browserify", function () {
	return gulp.src(["./src/js/app.js"], {read: false})
		// transform file objects using gulp-tap plugin
		.pipe(tap(function (file) {
			gutil.log(chalk.cyan("bundling " + file.path));
			// replace file contents with browserify"s bundle stream
			file.contents = browserify(file.path, {debug: true}).transform(babelify, {presets: ["es2015", "stage-0"]}).bundle();
		}))
		.pipe(buffer())
		//.pipe(uglify())
		.pipe(gulp.dest("./www/js"));
});
