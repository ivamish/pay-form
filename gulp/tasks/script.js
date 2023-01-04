import webpack from "webpack-stream";

export const scripts = () => {
    return app.gulp.src(app.path.src.js, {source: true})
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js',
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(app.gulp.dest(app.path.dist.js));
};