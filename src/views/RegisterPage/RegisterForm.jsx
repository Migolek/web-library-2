import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


export default class RegisterForm extends Component {
  render() {
    return (
      <form className="register-form">
        <TextField
          id="register-name-input"
          label="Imię"
          className="register-input"
          type="text"
          margin="normal"
        />
        <TextField
          id="register-lastname-input"
          label="Nazwisko"
          className="register-input"
          type="text"
          margin="normal"
        />
        <TextField
          id="register-nick-input"
          label="Nick"
          className="register-input"
          type="text"
          margin="normal"
        />
        <TextField
          id="register-birthday-input"
          label="Data urodzin"
          className="register-input"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="register-password-input"
          label="Hasło"
          className="register-input"
          type="password"
          margin="normal"
        />
        <TextField
          id="register-password-check-input"
          label="Potwierdź hasło"
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
        />
        <TextField
          id="register-city-input"
          label="Miejscowość"
          className="register-input"
          type="text"
          margin="normal"
        />
        <TextField
          id="standard-street-input"
          label="Ulica"
          className="register-input"
          type="text"
          margin="normal"
        />
        <TextField
          id="standard-house-number-input"
          label="Nr domu"
          className="register-input"
          type="text"
          margin="normal"
        />
        <div className="form-buttons">
          <Button variant="contained" color="secondary" className="standard-btn register-btn">
            <Link to="/dashboard">Register </Link>
          </Button>
        </div>
      </form>
    )
  }
}
