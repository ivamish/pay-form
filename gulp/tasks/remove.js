import cleanFolder from 'gulp-clean';
import fs from 'fs';

export const clean = () => {
    if(fs.existsSync(app.path.dist.files)){
        return app.gulp.src(app.path.dist.files, {read: false})
        .pipe(cleanFolder({
            force: true
        }));
    } else {
        fs.mkdirSync(app.path.dist.files);
        return app.gulp.src(app.path.dist.files, {read: false});
    }
};