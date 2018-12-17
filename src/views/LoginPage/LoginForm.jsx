import React, { Component } from 'react';
import {
  Button,
  Input,
  InputLabel,
  InputAdornment,
  FormControl
} from '@material-ui/core';
import axios from 'axios';
import config from '../../config/api';
import { Link } from 'react-router-dom';
import { AccountCircle, Lock } from '@material-ui/icons';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
    };
  }

  componentDidMount = () => {

  }

  updateState = (stateName, e) => {
    this.setState({
      [stateName]: e.target.value,
    });
  }

  loginUser = () => {
    const { login, password } = this.state;
    axios.post(`${config.url}/login`, {
      login,
      password
    })
      .then(function (response) {
        localStorage.setItem('auth', response.data.authorized);
        window.location.replace('/dashboard');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <form className="login-form">
        <FormControl className="form-input">
          <InputLabel htmlFor="input-with-icon-adornment">Login</InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            onChange={e => this.updateState('login', e)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="input-with-icon-adornment">Hasło</InputLabel>
          <Input
            id="input-with-icon-adornment"
            type="password"
            startAdornment={
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            }
            onChange={e => this.updateState('password', e)}
          />
        </FormControl>
        <div className="form-buttons">
          <Button variant="contained" color="primary" className="standard-btn login-btn" onClick={this.loginUser}>
            Zaloguj
          </Button>
          <Button variant="contained" color="secondary" className="standard-btn register-btn">
            <Link to="/register">Rejestracja </Link>
          </Button>
        </div>
      </form>
    )
  }
}
