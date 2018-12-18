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

const auth = Boolean(localStorage.getItem('auth'));
export default () => (
  <Switch>
    {auth === true &&
      <Route path="/dashboard" component={Dashboard} />
    }
    <Route exact path="/" component={LoginPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);