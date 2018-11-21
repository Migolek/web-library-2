import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import User from './User';
import Admin from './Admin';

export default () => (
  <Switch>
    <Route path="/dashboard" component={User} />
    <Route path="/dashboard/admin" component={Admin} />
    <Route component={() => <Redirect to="/dashboard" />} />
  </Switch>
);