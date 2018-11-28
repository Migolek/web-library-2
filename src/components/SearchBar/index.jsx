import React, { Component } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, OutlinedInput, FormLabel } from '@material-ui/core';
import './style.scss';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-form-wrapper">
        <form className="search-form">
          <TextField
            id="title-input"
            label="Tytuł"
            className="form-field"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="director-input"
            label="Reżyser"
            className="form-field"
            margin="normal"
            variant="outlined"
          />
           <FormControl variant="outlined">
            <InputLabel
              htmlFor="outlined-age-native-simple"
            >
              Gatunek
            </InputLabel>
            <Select
              native
              SelectLabelProps={{ shrink: true }}
              input={
                <OutlinedInput
                  name="Gatunek"
                  id="outlined-age-native-simple"
                />
              }
            >
              <option value="" />
              <option value={10}>Akcja</option>
              <option value={20}>Komedia</option>
              <option value={30}>Romans</option>
              <option value={30}>Western</option>
              <option value={30}>Dramat</option>
              <option value={30}>Thiller</option>
              <option value={30}>Horror</option>
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
              />
              <TextField
                id="year-name-to"
                label="do"
                className="form-field"
                margin="normal"
                type="number"
                variant="outlined"
              />
            </div>
          </FormControl>
          <Button variant="contained" color="primary">
            Szukaj
          </Button>
        </form>
      </div>
    );
  }
}

export default SearchBar;