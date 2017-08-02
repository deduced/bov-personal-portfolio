/* ************* Gulp Task Runner File ********************************/


//********* Plugins ***************//
var gulp = require('gulp'); //gulp package
var del = require('del'); //used for deleting public folder before running build
var sass = require('gulp-sass'); //compile .scss files; used in sass task
var cleanCSS = require('gulp-clean-css'); //to minify css files; used in sass task
var concat = require('gulp-concat'); //concat files; used in concatAndMinifyJs task
var uglify = require('gulp-uglify'); //minify js; used in concatAndMinifyJs task
var imagemin = require('gulp-imagemin'); // optimize image files; used in imageMin task
var jshint = require('gulp-jshint'); //Lint js files; used in lintJs task
var bump = require('gulp-bump'); //Version plugin; used in bumpPackage task
var runSequence = require('run-sequence'); //run tasks in sequence; used in deploy task
var git = require('gulp-git'); //run git relatd tasks; used in deploy task.
var browserSync = require('browser-sync').create(); //browserSync for change watching; used in watch task. 

//******* User Variables and Functions **********//
var gitMessage = "Add version bump task, bumpPackage,  to 'gulp deploy'. ";

function handleError (err) {
  console.log(err.toString());
  process.exit(-1);
}


//************* Gulp Tasks *************//

//delete generated folder
gulp.task('clean:public', function() {
  return del.sync('public');
});


gulp.task('concatAndMinifyJs', function() {
  gulp.src(['src/assets/js/jquery.js',
            'src/assets/js/jquery.easing.js',
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


//Lint javascript
gulp.task('lintJs', function() {
  gulp.src(['src/assets/js/scrolling-nav.js',
            'src/assets/js/back-to-top.js',
            'src/assets/js/overlay.js',
            'src/assets/js/slider.js'])
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(jshint.reporter('fail'));
});



//Bump version of package.json -- defaults to patch
gulp.task('bumpPackage', function() {
  gulp.src('package.json')
      .pipe(bump())
      .on('error', handleError)
      .pipe(gulp.dest('./'));
});


//*********Git Tasks************//
//git add all files in source
gulp.task('add', function(){
  return gulp.src('.')
    .pipe(git.add());
});

//git commit
gulp.task('commit', function(){
  return gulp.src('.')
    .pipe(git.commit(gitMessage));
});

//git push
gulp.task('push', function(){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});

//********* Build,  Deploy, and Watch Tasks ************//
gulp.task('build', ['lintJs', 'imageMin', 'sass', 'concatAndMinifyJs']);

gulp.task('deploy', function(callback) {
  runSequence('build', 'bumpPackage', 'add', 'commit', 'push', callback);
});

gulp.task('watch', function() {
  gulp.watch('src/stylesheets/**/*.scss', ['sass']);

  gulp.watch('src/assets/js/*.js', ['lintJs', 'concatAndMinifyJs']);
});
