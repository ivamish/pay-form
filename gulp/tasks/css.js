import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoPrefixer from 'gulp-autoprefixer';
const sass = gulpSass(dartSass);

export const style = () => {
    return app.gulp.src(app.path.src.css, {source: true})
           .pipe(sass().on('error', sass.logError))
           .pipe(autoPrefixer({
               grid: true,
               cascade: true,
               overrideBroweserlist: ['last 3 versions']
           }))
           .pipe(app.plugins.replace(/@img/gi, "../img"))
           .pipe(app.plugins.replace(/@icon/gi, "../icons"))
           .pipe(app.gulp.dest(app.path.dist.css));
};