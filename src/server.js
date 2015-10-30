
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Html from './pages/Html';

module.exports = function (app) {

  app.get('*', function(req, res, next) {
    const data = { 
      title       : '',
      description : '',
      css         : '',
      body        : '',
    };
    const html = ReactDOMServer.renderToStaticMarkup(<Html {...data} />);
    res.send('<!doctype html>\n' +html);
  });

};