import React, { Component } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';
import moviePhoto from '../../assets/images/placeholder.png';
import './style.scss';

export default class Movie extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div className="movie">
        <Card className="movie-card">
          <CardActionArea>
            <div className="movie-photo-block">
              <img src={moviePhoto} alt="movie-poster" />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {data.Tytul}
              </Typography>
              <Typography component="p">
                Reżyser: {data.Rezyser}
              </Typography>
              <Typography component="p">
                Gatunek: Dramat
              </Typography>
              <Typography component="p">
                Rok produkcji: {data.RokProdukcji}
              </Typography>
              <Typography component="p">
                Kraj: {data.Kraj}
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
