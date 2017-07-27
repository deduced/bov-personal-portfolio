/* ************* Gulp Task Runner File ********************************/


//********* Plugins ***************//
var gulp = require('gulp'); //gulp package
var del = require('del'); //used for deleting public folder before running build
var sass = require('gulp-sass'); //compile .scss files; used in sass task
var cleanCSS = require('gulp-clean-css'); //to minify css files; used in sass task
var concat = require('gulp-concat'); //concat files; used in concatAndMinifyJs task
var uglify = require('gulp-uglify'); //minify js; used in concatAndMinifyJs task




//******* User Variables and Functions **********//
function handleError (err) {
  console.log(err.toString())
  process.exit(-1)
}






//************* Gulp Tasks *************//

//delete generated folder
gulp.task('clean:public', function() {
  return del.sync('public');
});



//concat and minify JS files
gulp.task('concatAndMinifyJs', function() {
  gulp.src('src/assets/js/*.js')
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .on('error', handleError)
      .pipe(gulp.dest('./public/assets/js/'));
});


//compile Sass and minify resulting css
gulp.task('sass', function() {
  gulp.src('src/stylesheets/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(cleanCSS())
      .on('error', handleError)
      .pipe(gulp.dest('public/assets/stylesheets/'));
});
