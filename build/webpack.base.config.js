/**
 * Created by lenovo on 2017/7/10.
 */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const webpackConfig = {
    entry: {
        vendor: ["vue"]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, '../public/src')]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: [path.resolve(__dirname, '../node_modules')]
            },
            {test: /\.html$/, loader: 'string-loader'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: [{loader: 'css-loader', options:{minimize: true}}]})},
            {test: /\.jpg$/, loader: 'url-loader', options: {  // query是对loader做额外的选项配置
                limit: 10000, //图片小于10000字节时以base64的方式引用
                name: 'images/[name].[hash:7].[ext]' //文件名为name.7位hash值.拓展名
                }
            }
        ]
    },
    cache: true,
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        },
        extensions: ['.js', '.json']
    },
    plugins: [
        new ExtractTextPlugin('stylesheets/[name].css'),
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor'],
            filename: 'commons/[name].bundle.js'
        })
    ]
};




module.exports = webpackConfig;