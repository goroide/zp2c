const gulp = require('gulp');

const stylelint = require('gulp-stylelint');
const esLint = require('gulp-eslint');

gulp.task('lint:sass', () => {
  const builder = gulp.src('./packages/**/*.scss')
    .pipe(stylelint({
      failAfterError: false,
      reporters: [{ formatter: 'verbose', console: true}]
    }));
  return builder;
});

gulp.task('lint:js', () => {
  const builder = gulp.src('./packages/**/*.js')
    .pipe(esLint({ useEslintrc: true }))
    .pipe(esLint.format())
  return builder;
});

gulp.task('lint', ["lint:sass", "lint:js"]);
