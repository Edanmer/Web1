import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import 'semantic-ui-css/semantic.min.css';

import Home from './pages/app/Home.js';


const history = createBrowserHistory();

render((
  <Router history={history}>
    <Route path="/" component={Home} />
  </Router>
), document.getElementById('root'));

registerServiceWorker();