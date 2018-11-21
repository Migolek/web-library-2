import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Content from './Content';
import './style.scss';
import Sidebar from '../../components/Sidebar';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-page">
        <Navbar />
        <div className="app-content">
          <Sidebar />
          <div className="main-content">
            <Content />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
