import React, { Component } from 'react';
import TableList from '../../../../components/TableList';
import './style.scss';
class Employees extends Component {
  render() {
    return (
      <div className="employees">
        <h3>Zarządzaj użytkownikami</h3>
        <TableList />
      </div>
    );
  }
}

export default Employees;