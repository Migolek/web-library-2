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
import CommentIcon from '@material-ui/icons/Comment';
import './style.scss';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class MovieInfoList extends React.Component {
  state = {
    checked: [0],
    warehouseInfo: [],
  };

  componentDidMount = () => {
    this.getWarehouseObjects();
  }
  
  getWarehouseObjects = async () => {
    const opusID = this.props.opusID;
    await axios.get(`${config.url}/warehouse/${opusID}`)
      .then(response => {
        this.setState({warehouseInfo: response.data});
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;
    const { warehouseInfo } = this.state;
    console.log(this.props, this.state);
    return (
      <List className={(classes.root, 'carriers-list')}>
        {warehouseInfo.length > 0 && warehouseInfo.map(value => (
          <ListItem key={value} role={undefined} dense button onClick={this.handleToggle(value)}>
            <Checkbox
              checked={this.state.checked.indexOf(value) !== -1}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary={'asd'} />
            <ListItemSecondaryAction>
              <IconButton aria-label="Comments">
                <span>1</span>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

MovieInfoList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieInfoList);