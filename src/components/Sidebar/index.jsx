import React, { Component } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import './style.scss';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <List component="nav">
          <ListItem button>
            <ListItemText primary="Akcja" />
          </ListItem>
          <ListItemLink href="#simple-list">
            <ListItemText primary="Horror" />
          </ListItemLink>
          <ListItemLink href="#simple-list">
            <ListItemText primary="Western" />
          </ListItemLink>
          <ListItemLink href="#simple-list">
            <ListItemText primary="Sci-Fi" />
          </ListItemLink>
          <ListItemLink href="#simple-list">
            <ListItemText primary="Romans" />
          </ListItemLink>
          <ListItemLink href="#simple-list">
            <ListItemText primary="Komedia" />
          </ListItemLink>
          <ListItemLink href="#simple-list">
            <ListItemText primary="Dla dorosłych" />
          </ListItemLink>
        </List>
      </div>
    )
  }
}
