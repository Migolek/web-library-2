import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import config from '../../config/api';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Loader from 'react-loader-spinner';
import * as checkedIcon from '../../assets/icons/check.png';
import * as errorIcon from '../../assets/icons/error.png';
import './style.scss';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class MovieInfoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      warehouseInfo: [],
      isFetching: false,
      availableCarriers: 0,
      carriersAmount: null,
    };
  }

  componentDidMount = async () => {
    await this.getWarehouseObjects();
    await this.countCarriers();
  }

  getWarehouseObjects = async () => {
    const opusID = this.props.opusID;
    this.setState({isFetching: true});
    await axios.get(`${config.url}/warehouse/${opusID}`)
      .then(response => {
        console.log('response', response);
        this.setState({
          warehouseInfo: response.data,
          isFetching: false,
        });
      })
      .catch(error => {
        this.setState({isFetching: false});
        console.log(error);
      });
  }

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1 && value.CzyWolne === true) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      checked: newChecked,
    });
    if (newChecked.length > 0) {
      this.props.reserve(newChecked);
    }
  };

  renderCarriers = () => {
    const { warehouseInfo } = this.state;

    return warehouseInfo.map(item => {
      return (
        <ListItem
          role={undefined}
          dense
          button
          onClick={this.handleToggle(item)}
          disable={item.CzyWolne}
          className="item-list"
        >
          <Checkbox
            checked={this.state.checked.indexOf(item) !== -1}
            tabIndex={-1}
            disableRipple
          />
          <ListItemText primary={item.Nosnik.Typ} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Comments">
              <span>
                {item.CzyWolne &&
                  <img src={checkedIcon} alt="checked"/>
                }
                {!item.CzyWolne &&
                  <img src={errorIcon} alt="notChecked"/>
                }
              </span>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      );
    });
  }

  countCarriers = () => {
    const array = this.state.warehouseInfo;
    let available = 0;
    array.map(item => {
      if (item.CzyWolne) {
        available = available + 1;
      }
    });
    this.setState({
      carriersAmount: array.length,
      availableCarriers: available,
    });
  }

  render() {
    const { classes } = this.props;
    const { isFetching, availableCarriers, carriersAmount } = this.state;
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
        <List className={(classes.root, 'carriers-list')}>
          <div className="available-carriers">{`Dostępne nosniki: ${availableCarriers}/${carriersAmount}`}</div>
          {this.renderCarriers()}
        </List>
      </React.Fragment>
    );
  }
}

MovieInfoList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieInfoList);