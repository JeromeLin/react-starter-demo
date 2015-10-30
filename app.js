
var express = require('express');

var config = require('./server/config');

// Setting to routes
var app = express();
require('./server/express')(app);
require('./assets/server')(app);
require('./server/error')(app);
require('./bin/www')(app);