import React, { Component } from 'react'
import MoviesList from '../../../components/MoviesList';
import SearchBar from '../../../components/SearchBar';

export default class User extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MoviesList />
      </div>
    )
  }
}
