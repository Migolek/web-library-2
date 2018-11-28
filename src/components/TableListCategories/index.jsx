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
function createData(name, amount) {
  id += 1;
  return { id, name, amount};
}

const rows = [
  createData('Akcja', 1345),
  createData('Dramat', 976),
  createData('Komedia', 456),
  createData('Horror', 387),
  createData('Western', 189),
];

class SimpleTable extends React.Component {
  constructor(props) {
    super(props);
  }
  

  buttons = () => { return (<div><Button variant="contained" color="secondary">Dodaj kopię</Button><Button variant="contained" color="primary">Usuń kopię</Button></div>)};
  btnRemoveMovie = () => <Button variant="contained" color="#EC4424">Usuń film</Button>;

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Nazwa kategorii</TableCell>
              <TableCell numeric>Ilość wypożyczeń</TableCell>
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