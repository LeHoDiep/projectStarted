var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var watch = require('gulp-watch');
 
var pug = require('gulp-pug-3');

// gulp.task('pug', function() {
//     return gulp.src('app/pug/**/*.pug') 
//       .pipe(pug())
//       .pipe(gulp.dest('app/page'))
// });
gulp.task('pug', function() {
  return gulp.src('app/pug/index.pug') 
    .pipe(pug())
    .pipe(gulp.dest('app/page'))
});

gulp.task('sass', function() {
    return gulp.src('app/scss/style.scss') 
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
});



exports.watch = function () {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('app/pug/**/*.pug', gulp.series('pug'));
};