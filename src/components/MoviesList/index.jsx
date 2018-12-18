import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config/api';
import Movie from '../Movie';
import './style.scss';

export default class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }
  componentDidMount = () => {
    this.getMoviesList();
  }
  
  getMoviesList = () => {
    axios.get(`${config.url}/opuses`)
      .then(response => {
        this.setState({
          movies: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderMovies = () => {
    const movies = this.state.movies;
    return movies.map((movie, index) => (
      <Movie key={`index-${index}`} data={movie} />
    ));
  }

  render() {
    return (
      <div className="movies-list">
        {this.renderMovies()}
      </div>
    )
  }
}
