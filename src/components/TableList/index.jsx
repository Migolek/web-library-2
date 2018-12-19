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
function createData(name, pesel, wiek, role) {
  id += 1;
  return { id, name, pesel, wiek, role};
}

// const rows = [
//   createData('Piotr Niemczyk', 96071408211, 22, 'użytkownik'),
//   createData('Szymon Bąk', 95032532133, 23, 'pracownik'),
//   createData('Marek Szymański', 90011500332, 40, 'użytkownik'),
//   createData('Jakub Legutko', 100412567782, 8, 'pracownik'),
//   createData('Bolesław Dziedzic', 45672894942, 100, 'użytkownik'),
// ];

class SimpleTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.btnRemove = this.btnRemove.bind(this);
    this.btnAdd = this.btnAdd.bind(this);
  }
  
  componentDidMount = () => {
    this.getUserList();
  }
  
  getUserList = () => {
    axios.get(`${config.url}/users`)
      .then(response => {
        this.setState({
          users: response.data,
        });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderUserList = () => {
    const { users } = this.state;
    return users.map((user, index) => {
      return { 
        index, 
        name: `${user.Imie} ${user.Nazwisko}`, 
        pesel: user.PESEL, 
        birth: user.DataUrodzenia, 
        role: user.userPermissions[0].Role.Rola,
        user,
      }
    });
  }

btnRemove = (userID, roleID) =>{ 
  axios.put(`${config.url}/user`, {
    userID,
    roleID,
  })
  .then(response => {
    this.getUserList();
  })
  .catch(error => {
    console.log(error);
  });
};

btnAdd = (userID, roleID) =>{ 
  axios.put(`${config.url}/user`, {
    userID,
    roleID,
  })
  .then(response => {
    this.getUserList();
  })
  .catch(error => {
    console.log(error);
  });
};

  renderButtons = (row) => {
    if (row.role === 'admin') {
      return false;
    } else if (row.role === 'employee') {
      return <Button variant="contained" color="secondary" onClick={() => this.btnRemove(row.user.ID, row.user.userPermissions[0].RoleID)}>Usuń pracownika</Button> 
    } else {
      return <Button variant="contained" color="primary" onClick={() => this.btnAdd(row.user.ID, row.user.userPermissions[0].RoleID)}>Dodaj jako pracownik</Button>
    }
  }

  render() {
    const { classes } = this.props;
    const rows = this.renderUserList();
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
              console.log(row);
              return (
                <TableRow key={row.index}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell numeric>{row.pesel}</TableCell>
                  <TableCell numeric>{row.birth}</TableCell>
                  <TableCell numeric>{row.role}</TableCell>
                  <TableCell numeric>{this.renderButtons(row)}
                </TableCell>
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