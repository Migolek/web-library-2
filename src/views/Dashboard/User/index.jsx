import React, { Component } from 'react'
import MoviesList from '../../../components/MoviesList';
import SearchBar from '../../../components/SearchBar';

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesList: [],
    };
  }

  getMoviesList = movies => {
    this.setState({
      moviesList: movies,
    })
  }

  render() {
    return (
      <div>
        <SearchBar handleSubmit={this.getMoviesList}/>
        <MoviesList movies={this.state.moviesList}/>
      </div>
    )
  }
}
