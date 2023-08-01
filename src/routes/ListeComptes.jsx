import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';


function ListeComptes() {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual API endpoint to fetch item data.
    fetch('http://127.0.0.1:8000/api/users')
      .then((response) => response.json())
      .then((data) => setItemData(data));
  }, []); 
  
  return (
   <>
        <div className='grande-div-listeComptes'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">FISRT NAME</TableCell>
                    <TableCell align="right">LAST NAME</TableCell>
                    <TableCell align="right">EMAIL</TableCell>
                    <TableCell align="right">USERNAME</TableCell>
                    <TableCell align="right">DATE_JOINED</TableCell>
                    <TableCell align="right">GROUPS</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {itemData.map((row) => (
                    <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">{row.id}</TableCell>
                    <TableCell align="right">{row.first_name}</TableCell>
                    <TableCell align="right">{row.last_name}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.username}</TableCell>
                    <TableCell align="right">{row.date_joined}</TableCell>
                    <TableCell align="right">{row.groups}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
   </>
  )
}

export default ListeComptes