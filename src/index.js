import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';


import clientes from './pages/app/clientes.js';
import rutas from './pages/app/rutas.js';
import tripulacion from './pages/app/tripulacion.js';
import createClientes from './pages/app/createClientes.js';
import createRutas from './pages/app/createRutas.js';
import createTripulacion from './pages/app/createTripulacion.js';
import clientesDetail from './pages/app/clientesDetail.js';
import rutasDetail from './pages/app/rutasDetail.js';
import tripulacionDetail from './pages/app/tripulacionDetail.js';
import login from './pages/app/login.js';


const history = createBrowserHistory();

render((
  <Router history={history}>
    <Switch>
      <Route exact path={"/clientes"} component={clientes} />
      <Route exact path={"/rutas"} component={rutas} />
      <Route exact path={"/tripulacion"} component={tripulacion} />
      <Route exact path={"/createClientes"} component={createClientes} /> 
      <Route exact path={"/createRutas"} component={createRutas} /> 
      <Route exact path={"/createTripulacion"} component={createTripulacion} /> 
      <Route exact path={"/clientesDetail/:id"} component={clientesDetail} /> 
      <Route exact path={"/rutasDetail/:id"} component={rutasDetail} /> 
      <Route exact path={"/tripulacionDetail/:id"} component={tripulacionDetail} /> 
      <Route exact path={"/login"} component={login} /> 
    </Switch>
  </Router>
), document.getElementById('root'));

registerServiceWorker();