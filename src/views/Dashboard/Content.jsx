import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import User from './User';
import Admin from './Admin';

const role = localStorage.getItem('role');

export default () => (
  <Switch>
    <Route exact path="/dashboard" component={User} />
    {role === 'admin' &&
      <Route path="/dashboard/admin" component={Admin} />
    }
    <Route component={() => <Redirect to="/dashboard" />} />
  </Switch>
);