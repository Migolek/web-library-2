import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import Views from './views';

ReactDOM.render(
  <BrowserRouter>
    <Views />
  </BrowserRouter>
  , document.getElementById('root'));
