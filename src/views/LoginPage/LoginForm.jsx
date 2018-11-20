import React, { Component } from 'react';
import { 
  Button,
  Input,
  InputLabel,
  InputAdornment,
  FormControl
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AccountCircle, Lock } from '@material-ui/icons';

export default class LoginForm extends Component {
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
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="input-with-icon-adornment">Hasło</InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            }
          />
        </FormControl>
        <div className="form-buttons">
          <Button variant="contained" color="primary" className="standard-btn login-btn">
            <Link to="/dashboard">Zaloguj </Link>
          </Button>
          <Button variant="contained" color="secondary" className="standard-btn register-btn">
            <Link to="/register">Rejestracja </Link>
          </Button>
        </div>
      </form>
    )
  }
}
