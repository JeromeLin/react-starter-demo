
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

let history = createHashHistory({
  queryKey: false
});

const rootRoute = {
  path: '/',
  component: require('./pages/App'),
  childRoutes: [
    {
      getIndexRoute(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./pages/Page1'))
        }, 'Page1');
      }
    },
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
  ]
}

ReactDOM.render(
  <Router routes={rootRoute} history={history} />,
  document.getElementById('app')
);
