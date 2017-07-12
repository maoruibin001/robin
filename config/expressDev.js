/**
 * Created by lenovo on 2017/7/7.
 */
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const mongoose = require('./config/mongoose');
// const db = mongoose();

// const app = express();
module.exports = function(app) {
    app.use(logger('dev'));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(express.static('./public/dist'));
    app.use(express.static('./static'));
    require('../app/routes/server.routes.controller')(app);

    app.use(function(req, res, next) {
        res.status(404);
        try {
            return res.send('404 NOT FOUNT')
        } catch (e) {
            console.error('404 set header after sent');
        }
        next();
    });

    app.use(function(error, req, res, next) {
        if (!error) {
            next();
        } else {
            res.status(500);
            try {
                res.send(error.message || '500 SERVER ERROR');
            } catch (e) {
                console.error('500 set header after sent');
            }
        }

    });
}