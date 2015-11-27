
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

let history = createBrowserHistory({
  queryKey: false
});

const rootRoute = {
  path: '/',
  component: require('./pages/App'),
  childRoutes: [
    {
      path: 'page1',
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./pages/Page1'))
        }, 'Page1');
      }
    },
    {
      path: 'page2',
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./pages/Page2'))
        }, 'Page2');
      }
    },
    {
      path: '*',
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./pages/NotFoundPage'))
        }, 'NotFoundPage');
      }
    }
  ],
  indexRoute: {
    getComponent(location, cb) {
      require.ensure([], (require) => {
        cb(null, require('./pages/Page1'))
      }, 'Page1');
    }
  }
}

ReactDOM.render(
  <Router routes={rootRoute} history={history} />,
  document.getElementById('app')
);
