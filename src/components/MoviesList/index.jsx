import React, { Component } from 'react';
import Movie from '../Movie';
import './style.scss';

export default class MoviesList extends Component {
  render() {
    return (
      <div className="movies-list">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    )
  }
}
