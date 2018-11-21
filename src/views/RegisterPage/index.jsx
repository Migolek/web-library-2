import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import RegisterForm from './RegisterForm';
import RegisterHeader from './RegisterHeader';
import './style.scss';

export default class RegisterPage extends Component {
  render() {
    return (
      <div className="register-page">
        <Card className="card-box">
          <RegisterHeader />
          <RegisterForm />
        </Card>
      </div>
    )
  }
}
