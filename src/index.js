import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';


import Home from './pages/app/Home.js';
import postAJob from './pages/app/postAJob.js';
import filteredJobs from './pages/app/filteredJobs.js';
import jobDetail from './pages/app/jobDetail.js';
import login from './pages/app/login.js';


const history = createBrowserHistory();

render((
  <Router history={history}>
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/postAJob"} component={postAJob} /> 
      <Route exact path={"/filteredJobs"} component={filteredJobs} /> 
      <Route exact path={"/jobDetail/:id"} component={jobDetail} /> 
      <Route exact path={"/login"} component={login} /> 
    </Switch>
  </Router>
), document.getElementById('root'));

registerServiceWorker();