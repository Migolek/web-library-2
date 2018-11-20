import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './style.scss';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-page">
        <Navbar />
        cześć
        <Footer />
      </div>
    )
  }
}
