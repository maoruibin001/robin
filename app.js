const express = require('./config/express');
const mongoose = require('./config/mongoose');


const db = mongoose();
const app = express();

module.exports = app;