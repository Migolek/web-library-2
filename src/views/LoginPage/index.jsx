import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import LoginForm from './LoginForm';
import './style.scss';
import LoginHeader from './LoginHeader';

export default class index extends Component {
  render() {
    return (
      <div className="login-page">
        <Card className="card-box">
          <LoginHeader />
          <LoginForm />
        </Card>
      </div>
    )
  }
}
