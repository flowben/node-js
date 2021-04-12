var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var demoRouter = require('./routes/demo');
var storiesRouter = require('./routes/stories');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/demo', demoRouter);
app.use('/stories', storiesRouter);
module.exports = app;
