/**
 * Created by lenovo on 2017/7/7.
 */
const path = require('path');

const resolve = function (dir) {
    return path.resolve(__dirname, dir);
}
module.exports = function(app) {
    // app.route('/')
    //     .get(function(req, res) {
    //         res.sendFile(resolve('../../public/dist/login/login.html'));
    //     });
    app.route('*', function(req, res, next) {
        console.log('33afsd')
    })
    app.get('/favicon.ico', function(req, res) {
        res.sendFile(resolve('../../static/images/favicon.ico'));
    });
    app.get('/tt', function(req, res) {
        res.send('hahhaha');
    });

    return app;
}