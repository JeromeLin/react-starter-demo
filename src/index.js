
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

let history = createHashHistory({
  queryKey: false
});

const rootRoute = {
    path: '/',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            var App = require('./pages/App');
            cb(null, App)
        })
    },
    childRoutes: [
        {
            getIndexRoute(location, cb) {
                require.ensure([], (require) => {
                    var Page1 = require('./pages/Page1');
                    cb(null, Page1)
                })
            }
        },
        {
            path: 'Page1',
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    var Page1 = require('./pages/Page1');
                    cb(null, Page1)
                })
            }
        },
        {
            path: 'Page2',
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    var Page2 = require('./pages/Page2');
                    cb(null, Page2)
                })
            }
        },
        {
            path: '*',
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    var NotFoundPage = require('./pages/NotFoundPage');
                    cb(null, NotFoundPage)
                })
            }
        }
    ]
}
ReactDOM.render(
    <Router routes={rootRoute} history={history} />,
    document.getElementById('app')
);
