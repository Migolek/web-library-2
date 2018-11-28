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
function createData(name, amount, amount2) {
  id += 1;
  return { id, name, amount, amount2};
}

const rows = [
  createData('Deadpool 2', 86564, 132674),
  createData('Gladiator', 32756, 40231),
  createData('Avengers', 1230, 2045),
  createData('Czarna pantera', 9740, 13056),
  createData('Iron man', 674, 863),
];

class SimpleTable extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Nazwa filmu</TableCell>
              <TableCell numeric>Ilość wypożyczeń</TableCell>
              <TableCell numeric>Ilość rezerwacji</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell numeric>{row.amount}</TableCell>
                  <TableCell numeric>{row.amount2}</TableCell>
                </TableRow>
              );
            })}
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