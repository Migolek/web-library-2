import React, { Component } from 'react';
import logo from '../../assets/icons/library.png';
import logo2 from '../../assets/icons/wypożyczalnia.png';
import logo3 from '../../assets/icons/wypożyczalnia2.png';

export default class LoginHeader extends Component {
  render() {
    return (
      <div className="login-header">
        <img className="logo-img" src={logo2} alt="logo"/>
      </div>
    )
  }
}
