/**
 * Created by lenovo on 2017/7/12.
 */
/**
 * Module dependencies.
 */
const config = require('../config/config');
const http = require('http');
const debug = require('debug');
const opn = require('opn');

const webpack = require('webpack');
const devConfig = require('../build/webpack.dev.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
/**
 * Get port from environment and store in Express.
 */
const initApp = require('../app/initApp');
initApp.set('port', config.PORT);

/**
 * Create HTTP server.
 */

const server = http.createServer(initApp);

/**
 * Listen on provided port, on all network interfaces.
 */

const compiler = webpack(devConfig);
const chalk = require('chalk');
const devMiddleware = webpackDevMiddleware(compiler, {
    quiet: true
});
const hotMiddleware = webpackHotMiddleware(compiler, {

});

compiler.plugin('complation', function(complation) {
    complation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({action: 'reload'});
        chalk.yellow('complation');
        cb();
    });

});

initApp.use(devMiddleware);
initApp.use(hotMiddleware);

var uri = 'http://localhost:' + config.PORT;
initApp.listen(config.PORT, function() {
    console.log('server start at: ' + uri);
    opn(uri, {app: 'chrome'});
});
const app = require('../app')(initApp);
module.exports = app;