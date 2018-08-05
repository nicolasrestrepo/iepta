import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/app.scss';
import createBrowserHistory from 'history/createBrowserHistory';
import config from './config';
import AppRoutes from './routes';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp(config.firebase);

const customHistory = createBrowserHistory();

ReactDOM.render(
    <Router history={customHistory}>
        <AppRoutes />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
