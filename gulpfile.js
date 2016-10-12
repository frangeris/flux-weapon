const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('webpack', () => {
    return gulp.src('./index.js')
        .pipe(webpack({
            output: {
                filename: 'index.js',
                libraryTarget: 'umd',
            },
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015'],
                        }
                    },
                ],
            },
            devtool: 'source-map',
        }))
        .pipe(gulp.dest('./dist'));
});
