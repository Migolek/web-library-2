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
function createData(name, pesel, wiek, role) {
  id += 1;
  return { id, name, pesel, wiek, role};
}

const rows = [
  createData('Piotr Niemczyk', 96071408211, 22, 'użytkownik'),
  createData('Szymon Bąk', 95032532133, 23, 'pracownik'),
  createData('Marek Szymański', 90011500332, 40, 'użytkownik'),
  createData('Jakub Legutko', 100412567782, 8, 'pracownik'),
  createData('Bolesław Dziedzic', 45672894942, 100, 'użytkownik'),
];

class SimpleTable extends React.Component {
  constructor(props) {
    super(props);

    this.btnRemove = this.btnRemove.bind(this);
    this.btnAdd = this.btnAdd.bind(this);
  }
  

  btnRemove = () => <Button variant="contained" color="secondary">Usuń pracownika</Button>;
  btnAdd = () => <Button variant="contained" color="primary">Dodaj jako pracownik</Button>;

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Imię i nazwisko</TableCell>
              <TableCell numeric>Numer pesel</TableCell>
              <TableCell numeric>Wiek</TableCell>
              <TableCell numeric>Rola</TableCell>
              <TableCell numeric>Działanie</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell numeric>{row.pesel}</TableCell>
                  <TableCell numeric>{row.wiek}</TableCell>
                  <TableCell numeric>{row.role}</TableCell>
                  <TableCell numeric>{row.role === 'pracownik' ? this.btnRemove() : this.btnAdd()}</TableCell>
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