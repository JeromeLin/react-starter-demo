'use strict';
var winston = require('winston');
var env = process.env.NODE_ENV || 'development';

module.exports = function () {
  // add logger to global
  // levels: silly debug verbose info warn error / default: info
  if (env === 'development') {
    global.logger = new (winston.Logger)({
      transports: [
        new winston.transports.Console({
        }),
        new winston.transports.File({
          name: 'info logs',
          filename: 'log/development-log.log',
          timestamp: true
        }),
        new winston.transports.File({
          name: 'error logs',
          level: 'error',
          filename: 'log/development-error.log',
          timestamp: true
        })
      ],
      exceptionHandlers: [
        new (winston.transports.Console)({
          json: true
        }),
        new winston.transports.File({
          filename: 'log/development-exceptions.log',
          timestamp: true
        })
      ]
    });
  } else {
    global.logger = new (winston.Logger)({
      transports: [
        new winston.transports.File({
          name: 'info logs',
          // level: 'info',
          filename: 'log/info.log',
          timestamp: true
        }),
        new winston.transports.File({
          name: 'error logs',
          level: 'error',
          filename: 'log/error.log',
          timestamp: true
        })
      ],
      exceptionHandlers: [
        new winston.transports.File({
          filename: 'log/exceptions.log',
          timestamp: true
        })
      ],
      exitOnError: false
    });
    global.access = new (winston.Logger)({
      transports: [
        new winston.transports.File({
          name: 'access',
          filename: 'log/access.log'
        })
      ]
    });
  }
};