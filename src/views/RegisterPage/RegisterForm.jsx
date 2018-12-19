import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../config/api';

export default class RegisterForm extends Component {
  constructor() {
    super();

    this.state = {
      userData: {
        firstName: '',
        lastName: '',
        nick: '',
        dateOfBirth: '',
        password: '',
        pesel: '',
        city: '',
        street: '',
        flatNumber: '',
      },
      role: 'user',
      errorMessage: '',
      message: ''
    };
  }

  updateState = (stateName, e) => {
    const data = this.state.userData;
    this.setState({
      userData: {
        ...data,
        [stateName]: e.target.value,
      }
    });
  }

  registerUser = () => {
    const { userData, role } = this.state;
    this.setState({
      errorMessage: '',
      message: ''
    });
    axios.post(`${config.url}/user`, {
      userData: {
        ...userData,
        dateOfBirth: new Date(userData.dateOfBirth),
        pesel: Number(userData.pesel),
        flatNumber: Number(userData.flatNumber),
      },
      role
    })
      .then(response => {
        this.setState({message: response.data});
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message,
        });
      });
  }

  render() {
    const { message, errorMessage } = this.state;
    return (
      <form className="register-form">
        <TextField
          id="register-name-input"
          label="Imię*"
          className="register-input"
          type="text"
          margin="normal"
          onChange={e => this.updateState('firstName', e)}
        />
        <TextField
          id="register-lastname-input"
          label="Nazwisko*"
          className="register-input"
          type="text"
          margin="normal"
          onChange={e => this.updateState('lastName', e)}
        />
        <TextField
          id="register-nick-input"
          label="Nick*"
          className="register-input"
          type="text"
          margin="normal"
          onChange={e => this.updateState('nick', e)}
        />
        <TextField
          id="register-birthday-input"
          label="Data urodzin*"
          className="register-input"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          onChange={e => this.updateState('dateOfBirth', e)}
        />
        <TextField
          id="register-password-input"
          label="Hasło*"
          className="register-input"
          type="password"
          margin="normal"
          onChange={e => this.updateState('password', e)}
        />
        <TextField
          id="register-password-check-input"
          label="Potwierdź hasło*"
          className="register-input"
          type="password"
          margin="normal"
        />
        <TextField
          id="register-pesel-input"
          label="PESEL"
          className="register-input"
          type="number"
          margin="normal"
          onChange={e => this.updateState('pesel', e)}
        />
        <TextField
          id="register-city-input"
          label="Miejscowość*"
          className="register-input"
          type="text"
          margin="normal"
          onChange={e => this.updateState('city', e)}
        />
        <TextField
          id="standard-street-input"
          label="Ulica"
          className="register-input"
          type="text"
          margin="normal"
          onChange={e => this.updateState('street', e)}
        />
        <TextField
          id="standard-house-number-input"
          label="Nr domu*"
          className="register-input"
          type="number"
          margin="normal"
          onChange={e => this.updateState('flatNumber', e)}
        />
        {message && 
          <span className="message">{message}</span>
        }
        {errorMessage && 
          <span className="error">{errorMessage}</span>
        }
        <div className="form-buttons">
          <Button variant="contained" color="primary" className="standard-btn register-btn">
            <Link to="/login" >Wróc do logowania</Link>
          </Button>
          <Button variant="contained" color="secondary" className="standard-btn register-btn" onClick={this.registerUser}>
            Zarejestruj
          </Button>
        </div>
      </form>
    )
  }
}
