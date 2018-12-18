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
      errorMessage: '',
    };
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') {
      this.loginUser();
    }
  }

  updateState = (stateName, e) => {
    this.setState({
      [stateName]: e.target.value,
    });
  }

  loginUser = () => {
    const { login, password } = this.state;
    this.setState({
      errorMessage: '',
    });
    axios.post(`${config.url}/login`, {
      login,
      password
    })
      .then(response => {
        localStorage.setItem('auth', response.data.authorized);
        this.setState({errorMessage: ''});
        window.location.replace('/dashboard');
      })
      .catch(error => {
        localStorage.setItem('auth', false);
        this.setState({
          errorMessage: error.message,
          login: '',
          password: '', 
        });
      });
  }

  render() {
    const error = this.state.errorMessage;
    return (
      <form className="login-form">
        <FormControl className="form-input">
          <InputLabel htmlFor="input-with-icon-adornment">Login</InputLabel>
          <Input
            id="input-with-icon-adornment"
            value={this.state.login}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            onChange={e => this.updateState('login', e)}
            onKeyDown={e => this.handleEnter(e)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="input-with-icon-adornment">Hasło</InputLabel>
          <Input
            id="input-with-icon-adornment"
            type="password"
            value={this.state.password}
            startAdornment={
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            }
            onChange={e => this.updateState('password', e)}
            onKeyDown={e => this.handleEnter(e)}
          />
        </FormControl>
        {error &&
          <div class="error-message">
            {error}
          </div>
        }
        <div className="form-buttons">
          <Button variant="contained" color="primary" className="standard-btn login-btn" onClick={this.loginUser} >
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
