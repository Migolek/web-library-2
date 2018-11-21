import React, { Component } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';
import './style.scss'

export default class Admin extends Component {
  render() {
    return (
      <div className="dashboard-page-admin">
        <Card className="single-card">
          <CardContent>
            <Typography className="card-title" color="textSecondary" gutterBottom>
              Dodaj pracownika
            </Typography>
          </CardContent>
          <CardActions>
            <Button fullWidth color="primary" variant="contained" size="small">Dodaj</Button>
          </CardActions>
        </Card>
        <Card className="single-card">
          <CardContent>
            <Typography className="card-title" color="textSecondary" gutterBottom>
              Sprawdź statystyki
            </Typography>
          </CardContent>
          <CardActions>
            <Button fullWidth color="primary" variant="contained" size="small">Sprawdź</Button>
          </CardActions>
        </Card>
        <Card className="single-card">
          <CardContent>
            <Typography className="card-title" color="textSecondary" gutterBottom>
              Dodaj lub usuń film
            </Typography>
          </CardContent>
          <CardActions>
            <Button fullWidth color="primary" variant="contained" size="small">Dodaj/Usuń</Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}
