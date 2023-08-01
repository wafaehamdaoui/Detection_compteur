import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';


export default function ListeRapport() {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual API endpoint to fetch item data.
    fetch('http://127.0.0.1:8000/api/reports')
      .then((response) => response.json())
      .then((data) => setItemData(data));
  }, []); 

  return (
    <>
        <div className='grande-div-listeRapport'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">LOCATION</TableCell>
                    <TableCell align="right">CREATOR</TableCell>
                    <TableCell align="right">CREATED_AT</TableCell>
                    <TableCell align="right">UPDATED_AT</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                  {console.log('itemData',itemData)}
                {itemData.map((row) => (
                  
                    <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell align="right">{row.url}</TableCell>
                    <TableCell align="right">{row.creator}</TableCell>
                    <TableCell align="right">{row.created_at}</TableCell>
                    <TableCell align="right">{row.updated_at}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
   </>
  );
}