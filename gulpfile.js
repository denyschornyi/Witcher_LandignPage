const gulp         = require('gulp');
const browserSync  = require('browser-sync');
const less         = require('gulp-less');
const cleanCSS     = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const imagemin     = require('gulp-imagemin');
const rename       = require('gulp-rename');

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('style', function(){
    return gulp.src('less/style.less')
    .pipe(less())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function(){
    gulp.watch('less/*.less', gulp.parallel('style'));
});

gulp.task('imgmin', function(){
    return gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img_min'))
});

gulp.task('default', gulp.parallel('server', 'style', 'watch', 'imgmin'));