import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { get_event } from '@/app/helper/action';


export default async function BasicTable() {
  return (
    <TableContainer component={Paper} className='mx-auto'>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow className='bg-gray-600 text-white'>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Nom</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Lieu</TableCell>
            <TableCell align="right">Category</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {(await get_event()).map((row : any) => (
            <TableRow
              key={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
  
             { /*<TableCell align="right">{row[1].Name}</TableCell>*/}
              <TableCell align="right">{row[1].Date}</TableCell>
              <TableCell align="right">{row[1].Description}</TableCell>
              <TableCell align="right">{row[1].Email}</TableCell>
              <TableCell align="right">{row[1].Lieu}</TableCell>
              <TableCell align="right">{row[1].Contact}</TableCell>
              <TableCell align="right">{row[1].category}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
