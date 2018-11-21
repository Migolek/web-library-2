import React, { Component } from 'react';
import moment from 'moment';
import './style.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {`Copyright ${moment().format('Y')} Web library`} 
      </div>
    )
  }
}
