import React, { Component } from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';
import moviePhoto from '../../assets/images/creed-2.jpg';
import './style.scss';

export default class Movie extends Component {
  render() {
    return (
      <div className="movie">
        <Card className="movie-card">
          <CardActionArea>
            <div className="movie-photo-block">
              <img src={moviePhoto} alt="movie-poster" />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Tytuł: Creed II
              </Typography>
              <Typography component="p">
                Reżyser: Steven Caple Jr.
              </Typography>
              <Typography component="p">
                Gatunek: Dramat
              </Typography>
              <Typography component="p">
                Rok produkcji: 2018
              </Typography>
              <Typography component="p">
                Kraj: USA
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Zarezerwuj
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}
