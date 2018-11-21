import React, { Component } from 'react';
import logo from '../../assets/icons/library.png';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import './style.scss';

export default class Navbar extends Component {
  render() {
    return (
      <AppBar position="static" className="navbar">
        <Toolbar>
          <IconButton className="logo-box" color="inherit" aria-label="Menu">
            <img className="logo-img" src={logo} alt="logo" />
          </IconButton>
          <Typography variant="h6" color="inherit" className="logo-text">
            Web library
          </Typography>
          <div>
            <IconButton
              aria-haspopup="true"
              color="inherit"
              onClick={() => window.location.replace('/dashboard/admin')}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}
