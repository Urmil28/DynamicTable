import React from 'react';
import './index.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Tabular extends React.Component{
  constructor(props) {
      super(props);
    this.rows = [
    this.createData('Donuts4Hair', 'donuts4hair', 105, 823, 'Glendora, CA','X'),
    this.createData('Aditya Thakkar', 'adityathakkar', 5, 139, 'Torontto, ON','X'),
    this.createData('Bilal Tariq', 'beehtrix', 1247, 733, 'Dubai x Torronto','X'),
    this.createData('Taylor Jorden', 'taylorjorden', 20, 787, 'Boulder, CO','X'),
    this.createData('Mevrouw de Vries', 'mevrouwdevries', 1, 70, 3.9,'X'),
  ];
  
  this.createData = this.createData.bind(this);
     
    }
  
    createData(name, screen_name, followers, friends, location, verified) {
      return { name, screen_name, followers, friends, location, verified };
  }
  
  
  
  render(){
  
    return (
      
      <TableContainer class="table" component={Paper}>
        
        <Table aria-label="simple table">
          <TableHead>
          
            <TableRow style={{backgroundColor: 'gainsboro'}}>
              <TableCell><b>Name</b></TableCell>
              <TableCell align="right"><b>Screen Name</b></TableCell>
              <TableCell align="right"><b>Followers</b></TableCell>
              <TableCell align="right"><b>Friends Count</b></TableCell>
              <TableCell align="right"><b>Location</b></TableCell>
              <TableCell align="right"><b>Verified</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.screen_name}</TableCell>
                <TableCell align="right">{row.followers}</TableCell>
                <TableCell align="right">{row.friends}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">{row.verified}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  }

export default Tabular;
