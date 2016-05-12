var gulp = require('gulp');
var del = require('del');

gulp.task('clean:www', function () {
	return del(['www/report.csv']);
});
