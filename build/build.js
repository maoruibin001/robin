/**
 * Created by lenovo on 2017/7/10.
 */
const webpack = require('webpack');

let webpackConfig = null;

if (process.argv.indexOf('-pro') !== -1) {
     webpackConfig = require('./webpack.pro.config');
} else {
    webpackConfig = require('./webpack.dev.config');
}
webpack(webpackConfig, function(err, stats) {
    if (err) {
        throw new Error(err);
    }

    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n');
})