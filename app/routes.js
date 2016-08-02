import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import Welcome from './components/Welcome';

import Clients from './containers/Clients';
import Navbar from './components/Navbar';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="/clients" component={Clients} />
    <Route path="/navbar" component={Navbar} />
  </Route>
);
