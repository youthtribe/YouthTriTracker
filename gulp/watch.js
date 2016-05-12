var gulp = require('gulp');

var paths = {
  sass: ['./src/scss/**/*.scss']
};

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});
