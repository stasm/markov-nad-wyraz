var gulp = require('gulp');
var wisp = require('gulp-wisp');
var include = require('gulp-inc');

gulp.task('default', ['build']);

gulp.task('build', function() {
  gulp.src('./src/**/*.wisp')
  .pipe(include({
    preproccesor: function(content) { return content; },
    regex: /;\s*include\s+([^\s]+)/gm
  }))
  .pipe(wisp())
  .pipe(gulp.dest('./dist'));
});
