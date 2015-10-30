
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

var config = require('./config');

module.exports = function (app) {
  // view engine setup
  app.set('views', config.root + '/html');
  app.engine('.html', require('ejs').__express); 
  app.set('view engine', 'html');

  // uncomment after placing your favicon in /assets
  // app.use(favicon(__dirname + '/assets/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(config.root + '/assets'));
}