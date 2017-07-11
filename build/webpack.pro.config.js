/**
 * Created by lenovo on 2017/7/5.
 */
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const webpackConfig = merge(baseWebpackConfig, {
    entry: {},
    output: {
        path: path.resolve(__dirname, '../public/dist/'),
        filename: '[name]/[name]-[hash].js',
        publicPath: 'http://localhost:3000/'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
});

let getEntries = function (filePath, folderLevel) {
    let _filePath = path.resolve(__dirname, filePath);
    let files = glob.sync(_filePath);
    let entries = {}, entry, moduleName, fileName;
    for (let i = 0, len = files.length; i < len; i ++) {
        let file = files[i];
        let folderList = file.split('/'),
            folderListLen = folderList.length;
        moduleName = folderList[folderListLen - folderLevel];
        fileName = file.split('/')[folderListLen - folderLevel + 1].split('.')[0];
        if (moduleName === fileName || fileName === 'index') {
            entries[moduleName] = file;
        }
    }
    return entries;
};

let filePath = '../public/src/**/*.js';
let entries = getEntries(filePath, 2);

Object.keys(entries).forEach(function(name) {
    // 每个页面生成一个entry，如果需要HotUpdate，在这里修改entry
    webpackConfig.entry[name] = entries[name];

    // 每个页面生成一个html
    console.log(name + '/' + name + '.html');
    let plugin = new HtmlWebpackPlugin({
        // 生成出来的html文件名
        filename: name + '/' + name + '.html',
        // 每个html的模版，这里多个页面使用同一个模版
        template: entries[name].split('.')[0] + '.html',
        // 自动将引用插入html
        inject: true,
        // 每个html引用的js模块，也可以在这里加上vendor等公用模块
        chunks: [name],
        // 压缩html
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
        }
    })
    webpackConfig.plugins.push(plugin);
});

module.exports = webpackConfig;
