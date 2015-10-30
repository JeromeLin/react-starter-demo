
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import App from './pages/App';
import NotFoundPage from './pages/NotFoundPage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

let history = createHashHistory({
  queryKey: false
});

const rootRoute = {
    path: '/',
    component: App,
    childRoutes: [
    {
        getIndexRoute(location, cb) {
            require.ensure([], (require) => {
                cb(null, Page1)
            })
        }
    },
    {
        path: 'Page1',
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, Page1)
            })
        }
    },
    {
        path: 'Page2',
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, Page2)
            })
        }
    },
    {
        path: '*',
        getComponent(location, cb) {
            require.ensure([], (require) => {
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
