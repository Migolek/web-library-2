import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config/api';
import Movie from '../Movie';
import Loader from 'react-loader-spinner';
import './style.scss';

export default class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      isFetching: false,
    };
  }
  componentDidMount = () => {
    this.getMoviesList();
  }

  componentDidUpdate = (prevProps) => {
    const { movies } = this.props;

    if (prevProps.movies !== movies) {
      this.setState({
        movies: movies,
      });
    }
  }

  fetchPoster = async (title) => {
    return await axios.get(`${config.imdbUrl}/?t=${title}&apikey=e4f6496`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  
  getMoviesList = async () => {
    this.setState({isFetching: true});
    await axios.get(`${config.url}/opuses`)
      .then(response => {
        const tmpMovies = response.data.map( async movie => {
          const image = await this.fetchPoster(movie.Dzielo.Tytul);
          return await {
            ...movie,
            poster: image.Poster,
          }
        });
        Promise.all(tmpMovies).then(data => {
          this.setState({
            isFetching: false,
            movies: data,
          });
        });
      })
      .catch(error => {
        this.setState({isFetching: false});
        console.log(error);
      });
  }

  renderMovies = () => {
    const movies = this.state.movies;
    if (movies) {
      return movies.map((movie, index) => (
        <Movie key={`index-${index}`} data={movie} />
      ));
    }
    return false;
  }

  render() {
    const { isFetching } = this.state;
    return (
      <React.Fragment>
        {isFetching &&
          <div className="ajax-loader">
            <Loader 
              type="Triangle"
              color="#3f51b5"
              height="100"	
              width="100"
            />  
          </div>
        }
        <div className="movies-list">
          {this.renderMovies()}
        </div>
      </React.Fragment>
    )
  }
}
