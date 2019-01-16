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
import Loader from 'react-loader-spinner';
import './style.scss';

class MovieDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      isFetching: false,
      user: [],
      checkedCarriers: [],
      message: '',
    };
  }

  componentDidMount = () => {
    this.getSingleUserInfo();
  }
  
  getSingleUserInfo = async () => {
    const userID = localStorage.getItem('userID');
    this.setState({isFetching: true});
    await axios.get(`${config.url}/users/${userID}`)
      .then(response => {
        this.setState({
          user: response.data,
          isFetching: false,
        });
      })
      .catch(error => {
        this.setState({isFetching: false});
        console.log(error);
      });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = async reserve => {
    await this.reserveCarrier(reserve);
  };

  getCheckedCarrier = carrier => {
    this.setState({checkedCarriers: carrier});
  }

  reserveCarrier = async reserve => {
    if(reserve) {
      await axios.put(`${config.url}/warehouse/reserve`, {
        data: this.state.checkedCarriers,
      })
        .then(response => {
          this.setState({
            isFetching: false,
            message: response.data,
          });
          setTimeout(() => {
            this.setState({
              open: false,
              message: '',
            });
          }, 1000);
        })
        .catch(error => {
          this.setState({
            isFetching: false,
            message: error.message,
          });
          setTimeout(() => {
            this.setState({
              open: false,
              message: '',
            });
          }, 1000);
        });
    } else {
      this.setState({
        open: false,
        message: '',
      });
    }
  }

  render() {
    const { user, isFetching } = this.state;
    const { fullScreen, movieData } = this.props;

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          {this.props.btnText}
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={() => this.handleClose(false)}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{`Zarezerwuj ${movieData.Dzielo.Tytul} już dziś!`}</DialogTitle>
          <DialogContent>
            <DialogContentText>
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
              <MovieInfoList reserve={this.getCheckedCarrier} opusID={movieData.Dzielo.ID}/>
            </DialogContentText>
          </DialogContent>
          <div className="movies-info-message">{this.state.message}</div>
          <DialogActions>
            <Button onClick={() => this.handleClose(false)} color="secondary">
              Anuluj
            </Button>
            <Button onClick={() => this.handleClose(true)} color="primary" autoFocus>
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