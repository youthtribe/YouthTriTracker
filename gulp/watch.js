var gulp = require("gulp");

var paths = {
  sass: ["./src/scss/**/*.scss"],
	js: ["./src/js/**/*.js"],
	html: ["./src/index.html", "./src/views/**/*.html"]
};

gulp.task("watch", function() {
  gulp.watch(paths.sass, ["sass"]);
	gulp.watch(paths.js, ["eslint", "browserify"]);
	gulp.watch(paths.html, ["copy:views", "copy:index"]);
});
