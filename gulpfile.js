/* ************* Gulp Task Runner File ********************************/


//********* Plugins ***************//
var gulp = require('gulp'); //gulp package
var del = require('del'); //used for deleting public folder before running build
var sass = require('gulp-sass'); //compile .scss files; used in sass task
var cleanCSS = require('gulp-clean-css'); //to minify css files; used in sass task
var concat = require('gulp-concat'); //concat files; used in concatAndMinifyJs task
var uglify = require('gulp-uglify'); //minify js; used in concatAndMinifyJs task
var imagemin = require('gulp-imagemin'); // optimize image files; used in imageMin task



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


gulp.task('concatAndMinifyJs', function() {
  gulp.src(['src/assets/js/jquery.js',
            'src/assets/js/jquery.easing.min.js',
            'src/assets/js/scrolling-nav.js',
            'src/assets/js/back-to-top.js',
            'src/assets/js/overlay.js',
            'src/assets/js/slider.js'])
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


//Optimize images
gulp.task('imageMin', function() {
    return gulp.src('src/assets/images/*')
                .pipe(imagemin())
                .on('error', handleError)
                .pipe(gulp.dest('public/assets/images'));
});


gulp.task('build', ['imageMin', 'sass', 'concatAndMinifyJs']);
