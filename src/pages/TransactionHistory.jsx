import React,
{
 useState
}
from "react";

import MainLayout
from "../layouts/MainLayout";

import {
 Paper,
 Typography,
 TextField,
 Button,
 Table,
 TableHead,
 TableBody,
 TableRow,
 TableCell,
 TableContainer
}
from "@mui/material";

import {
 getTransactions
}
from "../api/transactionApi";

function TransactionHistory(){

 const [accountId,
 setAccountId] =
 useState("");

 const [transactions,
 setTransactions] =
 useState([]);

 const loadTransactions =
 async()=>{

   try{

     const res =
     await getTransactions(
      accountId
     );

     setTransactions(
      res.data
     );

   }
   catch(error){

     alert(
      error.response?.data?.message
     );
   }
 };

 return(

  <MainLayout>

   <Paper
    sx={{
     p:3
    }}>

    <Typography
     variant="h5">

      Transaction History

    </Typography>

    <div
     style={{
      display:"flex",
      gap:"10px",
      marginTop:"20px"
     }}>

     <TextField
      label="Account Id"
      value={accountId}
      onChange={(e)=>
       setAccountId(
        e.target.value
       )
      }
     />

     <Button
      variant="contained"
      onClick={
       loadTransactions
      }>

      Search

     </Button>

    </div>

   </Paper>

   <TableContainer
    component={Paper}
    sx={{
     mt:3
    }}>

    <Table>

     <TableHead>

      <TableRow>

       <TableCell>
        Transaction Id
       </TableCell>

       <TableCell>
        Type
       </TableCell>

       <TableCell>
        Amount
       </TableCell>

       <TableCell>
        Date
       </TableCell>

      </TableRow>

     </TableHead>

     <TableBody>

      {
       transactions.map(
       (txn)=>(

       <TableRow
        key={
         txn.transactionId
        }>

        <TableCell>
         {txn.transactionId}
        </TableCell>

        <TableCell>
         {txn.transactionType}
        </TableCell>

        <TableCell>
         ₹ {txn.amount}
        </TableCell>

        <TableCell>
         {txn.transactionDate}
        </TableCell>

       </TableRow>

      ))
     }

     </TableBody>

    </Table>

   </TableContainer>

  </MainLayout>
 );
}

export default TransactionHistory;