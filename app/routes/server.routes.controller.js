/**
 * Created by lenovo on 2017/7/7.
 */
const path = require('path');

module.exports = function(app) {
    app.route('/')
        .get(function(req, res) {
            res.sendFile(path.resolve(__dirname, '../../public/login.html'));
        });
}