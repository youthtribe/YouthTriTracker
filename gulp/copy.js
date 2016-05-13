var gulp = require("gulp");

gulp.task("copy:views", function() {
	gulp.src("./src/views/**")
	.pipe(gulp.dest("./www/views"));
});

gulp.task("copy:index", function() {
	gulp.src("./src/index.html")
	.pipe(gulp.dest("./www"));
});

gulp.task("copy:resources", function() {
	gulp.src("./src/resources/**")
	.pipe(gulp.dest("./www/resources"));
});

gulp.task("copy:images", function() {
	gulp.src("./src/img/**")
	.pipe(gulp.dest("./www/img"));
});

gulp.task("copy:lib", function() {
	gulp.src("./lib/**")
	.pipe(gulp.dest("./www/lib"));
});
