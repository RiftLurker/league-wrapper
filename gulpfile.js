const gulp = require('gulp');
const eslint = require('gulp-eslint');

const src = [
  'lib/**/*.js',
  '!node_modules/**'
];

gulp.task('default', ['lint']);

gulp.task('lint', function() {
  return gulp.src(src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
