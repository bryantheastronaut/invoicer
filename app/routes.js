import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import Welcome from './components/Welcome';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="/home" component={HomePage} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
