import React from 'react'
import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Paper} from '@mui/material';
function TableOfPackets() {
  function createData(name, expire, off, price, buy) {
    return { name,  expire, off, price, buy };
  }
  const rows = [
    createData(<button className="charge">خرید</button>, 130000, 20+'%','بسته اینترنت سه ماهه','12'+'خرداد 1401'),
    createData(<button className="charge">خرید</button>, 45000, 45+'%', 'بسته ترکیبی هفتگی', '12 خرداد 1401'),
    createData(<button className="charge">خرید</button>, 50000, 15+'%', 'بسته اینترنت یک ماهه', '15 تیر 1401'),

  ];
    return (
        <React.Fragment>
            <div className="tablediv"> 
    
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">buy</TableCell>
            <TableCell align="right">قیمت</TableCell>
         
           <TableCell align="right">تخفیف</TableCell>
          
          <TableCell align="right">نام بسته</TableCell>
          <TableCell align="right">تاریخ انقضای بسته</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.expire}</TableCell>
              <TableCell align="right">{row.off}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.buy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
            </React.Fragment>
)
 
}

export default TableOfPackets;




