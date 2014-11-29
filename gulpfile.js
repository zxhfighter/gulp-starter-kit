var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('less-to-css', function () {
    return gulp.src('src/css/main.less')
               .pipe(less())
               .pipe(gulp.dest('asset/css'))
               .pipe(reload({stream: true}));
});

gulp.task('move', function () {
    gulp.src('*.html').pipe(gulp.dest('asset/'));
    return gulp.src('src/main.js').pipe(gulp.dest('asset/js'));
})

gulp.task('browser-sync', function () {
    browserSync({
        baseDir: './'
    });
});

gulp.task('default', ['less-to-css', 'move', 'browser-sync'], function () {
    gulp.watch('src/css/*.less', ['less-to-css']);
});

