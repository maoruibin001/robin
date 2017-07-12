module.exports = function(app) {
    const mongoose = require('./config/mongoose')();
    app = require('./config/express')(app);
    return app;
}