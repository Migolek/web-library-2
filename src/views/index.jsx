import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import '../scss/main.scss';

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Dashboard from './Dashboard'

export default () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/dashboard" component={Dashboard} />
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);