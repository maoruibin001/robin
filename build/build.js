/**
 * Created by lenovo on 2017/7/10.
 */
const webpack = require('webpack');
const rf = require('rimraf');
const path = require('path');
const ora = require('ora');

let webpackConfig = null,
    spinner = ora('production start....');

spinner.start();
rf.sync(path.resolve(__dirname, '../public/dist'));
webpackConfig = require('./webpack.pro.config');
webpack(webpackConfig, function(err, stats) {
    spinner.stop();
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
});
