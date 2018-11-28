import React, { Component } from 'react';
import TableListResources from '../../../../components/TableListResources';
import './style.scss';
class Resources extends Component {
  render() {
    return (
      <div className="employees">
        <h3>Zarządzaj zasobami</h3>
        <TableListResources />
      </div>
    );
  }
}

export default Resources;