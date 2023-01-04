//Импорты важных частей
import gulp from 'gulp';
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
import browsersync from "browser-sync";

global.app = {
    gulp: gulp,
    path: path,
    plugins: plugins
};

//Импорты тасков
import { copy } from './gulp/tasks/copy.js';
import { clean } from './gulp/tasks/remove.js';
import { html } from './gulp/tasks/html.js';
import { style } from './gulp/tasks/css.js';
import { scripts } from './gulp/tasks/script.js';

//смотритель

function watcher(){
    browsersync.init({
        server: {
            baseDir: "./dist"
        }
    });
    gulp.watch(path.watch.files, copy).on('change', browsersync.reload);
    gulp.watch(path.watch.html, html).on('change', browsersync.reload);
    gulp.watch(path.watch.css, style).on('change', browsersync.reload).on('change', html);
    gulp.watch(path.watch.js, scripts).on('change', browsersync.reload).on('change', html);
}

//основные таски

const main = gulp.parallel(copy, html, style, scripts);

//Сценарии

const dev = gulp.series(clean, main, watcher);

//таск по умолчанию
gulp.task('default', dev);