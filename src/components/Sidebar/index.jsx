import React, { Component } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
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
            <Link to="/dashboard/admin/employees" >Zarządzaj pracownikami</Link>
          </ListItem>
          <ListItem button>
            <Link to="/dashboard/admin/resources" >Zarządzaj zasobami</Link>
          </ListItem>
          <ListItem button>
            <Link to="/dashboard/admin/statistics" >Przeglądaj statystyki</Link>
          </ListItem>
        </List>
      </div>
    )
  }
}
