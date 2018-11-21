import React, { Component } from 'react';
import logo from '../../assets/icons/library.png';

export default class LoginHeader extends Component {
  render() {
    return (
      <div className="login-header">
        <img className="logo-img" src={logo} alt="logo"/>
        <h1 className="login-title">Web library</h1>
      </div>
    )
  }
}
