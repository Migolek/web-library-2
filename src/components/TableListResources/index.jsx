import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import config from '../../config/api';
import axios from 'axios';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, amount) {
  id += 1;
  return { id, name, amount};
}

const rows = [
  createData('Deadpool 2', 13),
  createData('Gladiator', 6),
  createData('Avengers', 4),
  createData('Czarna pantera', 20),
  createData('Iron man', 10),
];

class SimpleTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: {
        rows: []
      },
      count: [],
    }
  }

  componentDidMount = async () => {
    await this.getResources();
  }
  
  
  getResources = async () => {
    await axios.get(`${config.url}/warehouse`)
      .then(response => {
        this.setState({
          resources: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderList = () => {
    console.log('object', this.state.resources.rows);
    const data = this.state.resources.rows;
    return data.map(row => {
      return (
        <TableRow key={row.ID}>
          <TableCell component="th" scope="row">
            {row.Dzielo.Tytul}
          </TableCell>
          <TableCell numeric>{row.amount}</TableCell>
          <TableCell numeric>{this.buttons()}</TableCell>
          <TableCell numeric>{this.btnRemoveMovie()}</TableCell>
        </TableRow>
      );
    })
  }


  buttons = () => { return (<div><Button variant="contained" color="secondary">Dodaj kopię</Button><Button variant="contained" color="primary">Usuń kopię</Button></div>)};
  btnRemoveMovie = () => <Button variant="contained" color="#EC4424">Usuń film</Button>;

  render() {
    console.log(this.state.resources);
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Nazwa filmu</TableCell>
              <TableCell numeric>Ilość kopi</TableCell>
              <TableCell numeric>Dodaj/usuń kopię</TableCell>
              <TableCell numeric>Usuń film</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.renderList()}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);