import React, { Component } from 'react';
import { TextField, Button, FormControl, Select, OutlinedInput, FormLabel } from '@material-ui/core';
import config from '../../config/api';
import axios from 'axios';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import './style.scss';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      isFetching: false,
      types: [],
      inputs: {
        title: '',
        director: '',
        type: '',
        yearFrom: '',
        yearTo: '',
      },
      suggestions: {
        title: [],
        director: [],
      }
    };
  }

  componentDidMount = () => {
    this.getTypes();
  }
  
  updateInputState = (e, type) => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        [type]: e.target.value
      } 
    });

    if (type === 'title' || type === 'director') {
      this.getSuggestion(type, e.target.value);
    }
  }

  getSuggestion = (type, value) => {
    axios.get(`${config.url}/opuses/?${type}=${value}`)
    .then(response => {
      this.setState({
        suggestions: {
          ...this.state.suggestions,
          [type]: response.data,
        }
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  renderSuggestions = type => {
    const { suggestions } = this.state;
    if (suggestions[type]) {
      return Array.from(suggestions[type]).map(item => {
        if (type === 'title') {
          return (<option value={item['Tytul']} onClick={e => this.selectSuggestion(e, type)}>{item['Tytul']}</option>);
        } else if (type === 'director') {
          return (<option value={item['Rezyser']} onClick={e => this.selectSuggestion(e, type)}>{item['Rezyser']}</option>);
        }
      });
    }
    return false;
  }

  getTypes = async () => {
    await axios.get(`${config.url}/types`)
    .then(response => {
      const types = response.data.map(type => {
        return type.NazwaGatunku;
      });

      this.setState({types: types});
    })
    .catch(error => {
      console.log(error);
    });
  }

  renderTypes = () => {
    if (this.state.types) {
      return this.state.types.map(type => {
        return (<option value={type}>{type}</option>);
      });
    }
    return false;
  }

  selectSuggestion = (e, name) => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        [name]: e.target.value,
      },
      suggestions: {
        ...this.state.suggestions,
        [name]: [],
      }
    });
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const tmpYearFrom = this.state.inputs.yearFrom || 1950;
    const tmpYearTo = this.state.inputs.yearTo || 2050;
    this.setState({isFetching: true});
    await axios.post(`${config.url}/opuses/search`,{
      data: {
        ...this.state.inputs,
        yearFrom: moment(tmpYearFrom, "YYYY").toDate(),
        yearTo: moment(tmpYearTo, "YYYY").toDate(),
      }
    })
    .then(response => {
      this.setState({isFetching: false});
      const tmpMovies = response.data.map( async movie => {
        const image = await this.fetchPoster(movie.Dzielo.Tytul);
        return await {
          ...movie,
          poster: image.Poster,
        }
      });
      Promise.all(tmpMovies).then(data => {
        this.setState({isFetching: false});
        this.props.handleSubmit(data);
      });
    })
    .catch(error => {
      this.setState({isFetching: false});
      console.log(error);
    });

    this.setState({
      inputs: {
        title: '',
        director: '',
        type: '',
        yearFrom: '',
        yearTo: '',
      },
      suggestions: {
        title: [],
        director: [],
      }
    });
  }

  render() {
    const { title, director, type, yearFrom, yearTo } = this.state.inputs;
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
        <div className="search-form-wrapper">
          <form className="search-form" onSubmit={e => this.handleSubmit(e)}>
            <FormControl variant="outlined">
              <FormLabel component="legend">Tytuł filmu</FormLabel>
              <TextField
                id="title-input"
                label="wprowadź tytuł"
                className="form-field"
                margin="normal"
                variant="outlined"
                onChange={e => this.updateInputState(e, 'title') }
                value={title}
              />
              <ul className={this.state.suggestions.title.length === 0  ? 'suggestion-list hidden' : 'suggestion-list'}>
                <option value='' onClick={e => this.selectSuggestion(e, 'title')}></option>
                {this.renderSuggestions('title')}
              </ul>
            </FormControl>
            <FormControl variant="outlined">
              <FormLabel component="legend">Reżyser filmu</FormLabel>
              <TextField
                id="director-input"
                label="wprowadź reżysera"
                className="form-field"
                margin="normal"
                variant="outlined"
                onChange={e => this.updateInputState(e, 'director') }
                value={director}
              />
              <ul className={this.state.suggestions.director.length === 0  ? 'suggestion-list hidden' : 'suggestion-list'}>
                <option value='' onClick={e => this.selectSuggestion(e, 'director')}></option>  
                {this.renderSuggestions('director')}
              </ul>
            </FormControl>
            <FormControl variant="outlined">
              <FormLabel component="legend">Gatunek filmu</FormLabel>
              <Select
                native
                value={type}
                onChange={e => this.updateInputState(e, 'type') }
                input={
                  <OutlinedInput
                    name="type"
                    labelWidth={this.state.labelWidth}
                    id="outlined-age-native-simple"
                  />
                }
              >
                <option value="" />
                {this.state.types ? this.renderTypes() : false}
              </Select>
            </FormControl>
            <FormControl variant="outlined">
              <FormLabel component="legend">Rok produkcji</FormLabel>
              <div className="year-inputs">
                <TextField
                  id="year-name-from"
                  label="od"
                  className="form-field"
                  margin="normal"
                  type="number"
                  variant="outlined"
                  onChange={e => this.updateInputState(e, 'yearFrom') }
                  value={yearFrom}
                />
                <TextField
                  id="year-name-to"
                  label="do"
                  className="form-field"
                  margin="normal"
                  type="number"
                  variant="outlined"
                  onChange={e => this.updateInputState(e, 'yearTo') }
                  value={yearTo}
                />
              </div>
            </FormControl>
            <Button variant="contained" color="primary" type="submit">
              Szukaj
            </Button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;