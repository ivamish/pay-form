export const copy = () => {
    return app.gulp.src(app.path.src.files, {base: './src'})
           .pipe(app.gulp.dest(app.path.dist.files));
};