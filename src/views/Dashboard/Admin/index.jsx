import React, { Component } from 'react';
import Sidebar from '../../../components/Sidebar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Employees from './Employees';
import Resources from './Resources';
import Statistics from './Statistics';
import './style.scss'

export default class Admin extends Component {
  render() {
    return (
      <div className="admin-wrapper">
        <Sidebar />
        <div className="dashboard-page-admin">
        <Switch>
          <Route exact path="/dashboard/admin/employees" component={Employees} />
          <Route exact path="/dashboard/admin/resources" component={Resources} />
          <Route exact path="/dashboard/admin/statistics" component={Statistics} />
          {/* <Route component={() => <Redirect to="/dashboard/admin" />} /> */}
        </Switch>
        </div>
      </div>
    )
  }
}
