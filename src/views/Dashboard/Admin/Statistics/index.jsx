import React, { Component } from 'react';
import TableListStatistics from '../../../../components/TableListStatistics';
import './style.scss';
class Statistics extends Component {
  render() {
    return (
      <div className="employees">
        <h3>Statystyki</h3>
        <TableListStatistics />
      </div>
    );
  }
}

export default Statistics;