import include from 'gulp-file-include';
import version from 'gulp-version-number';

export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(include())
    .pipe(app.plugins.replace(/@img/gi, "img"))
    .pipe(app.plugins.replace(/@icon/gi, "icons"))
    .pipe(version({
        'value' : '%DT%',
        'append' : {
            'key' : '_v',
            'cover' : 0,
            'to' : ['css', 'js']
        }
    }))
    .pipe(app.gulp.dest(app.path.dist.html));
};