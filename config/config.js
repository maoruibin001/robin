/**
 * Created by lenovo on 2017/7/7.
 */
let config = null;
if (process && process.env && process.env.NODE_ENV) {
    config = require('./env/' + process.env.NODE_ENV);
} else {
    config = require('./env/delevopment');
}

module.exports = config;