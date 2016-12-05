var gulp = require('gulp'),
    sass = require('gulp-sass');

    //Styles task

gulp.task('styles', function(){
  gulp.src(['public/scss/*.scss)'])
       .pipe(sass()) 
       .pipe(gulp.dest('public/css/'));
});

    gulp.task('default', function(){
      gulp.watch('public/scss/**/*.scss', ['styles']);
    });