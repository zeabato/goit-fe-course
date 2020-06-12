var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber'); 
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', function(){
  return gulp.src('./src/scss/bootstrap.scss')
    .pipe(plumber())
    .pipe(sass.sync().on('error', sass.logError))
    
    .pipe(autoprefixer({cascade: false}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./src/css'));
});