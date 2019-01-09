import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import config from '../../config/api';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import MovieInfoList from '../MovieInfoList';

class MovieDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      user: [],
    };
  }

  componentDidMount = () => {
    this.getSingleUserInfo();
  }
  
  getSingleUserInfo = async () => {
    const userID = localStorage.getItem('userID');
    await axios.get(`${config.url}/users/${userID}`)
      .then(response => {
        this.setState({user: response.data});
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { user } = this.state;
    const { fullScreen, movieData } = this.props;

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          {this.props.btnText}
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{`Zarezerwuj ${movieData.Dzielo.Tytul} już dziś!`}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <MovieInfoList opusID={movieData.Dzielo.ID}/>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Anuluj
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Zarezerwuj
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

MovieDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(MovieDialog);