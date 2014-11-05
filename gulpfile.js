var gulp = require('gulp');
var wisp = require('gulp-wisp');

gulp.task('default', ['build']);

gulp.task('build', function() {
  gulp.src('./src/**/*.wisp')
  .pipe(wisp())
  .pipe(gulp.dest('./dist'));
});
