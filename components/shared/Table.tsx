import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fakeDataArray, fields } from '@/app/helper/helper';
import AlertDialog from './Dialog';



export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
                fields.map((field ) =>{
                    return <TableCell>{field}</TableCell>
                })
            }
           
          </TableRow>
        </TableHead>
        <TableBody>
          {fakeDataArray.map((row,idx) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Contact}
              </TableCell>
              <TableCell align="right">{row.EventName}</TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              <TableCell align="right">{row.Description}</TableCell>
              <TableCell align="right">{row.Email}</TableCell>
              <TableCell align="right">{row.Site}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right"><img src={row.ImageUpload} alt="" width={250} height={250} 
              className='rounded-full'
              /></TableCell>
            <TableCell align="right"><AlertDialog text={"Edit"} index={idx} /></TableCell>
            <TableCell align="right"><AlertDialog text={"Delete"} index={idx} /></TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}