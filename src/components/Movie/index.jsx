import React, { Component } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';
import moment from 'moment';
import moviePhoto from '../../assets/images/placeholder.png';
import './style.scss';

export default class Movie extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return (
      <div className="movie">
        <Card className="movie-card">
          <CardActionArea className="movie-card-action">
            <div className="movie-photo-block">
              <img src={data.poster || moviePhoto} alt="movie-poster" />
            </div>
            <CardContent className="movie-card-content">
              <Typography gutterBottom variant="h5" component="h2">
                {data.Dzielo.Tytul}
              </Typography>
              <Typography component="p">
                Reżyser: {data.Dzielo.Rezyser}
              </Typography>
              <Typography component="p">
                Gatunek: {data.Gatunek.NazwaGatunku}
              </Typography>
              <Typography component="p">
                Rok produkcji: {moment(data.Dzielo.RokProdukcji).year()}
              </Typography>
              <Typography component="p">
                Kraj: {data.Dzielo.Kraj}
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
