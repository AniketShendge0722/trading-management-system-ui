import React,
{
 useEffect,
 useState
}
from "react";

import MainLayout
from "../layouts/MainLayout";

import { getAccounts }
from "../api/accountApi";

import {
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Paper,
 Typography,
 Button
}
from "@mui/material";

import { useNavigate }
from "react-router-dom";

function AccountList(){

 const navigate =
 useNavigate();

 const [accounts,
 setAccounts] =
 useState([]);

 useEffect(()=>{

   loadAccounts();

 },[]);

 const loadAccounts =
 async()=>{

   const res =
   await getAccounts();

   setAccounts(
     res.data
   );
 };

 return(

  <MainLayout>

   <div
    style={{
      display:"flex",
      justifyContent:
      "space-between",
      marginBottom:20
    }}>

    <Typography
     variant="h4">

      Accounts

    </Typography>

    <Button
     variant="contained"
     onClick={()=>
      navigate(
       "/accounts/create"
      )
     }>

      Create Account

    </Button>

   </div>

   <TableContainer
    component={Paper}>

    <Table>

      <TableHead>

       <TableRow>

        <TableCell>
         Account ID
        </TableCell>

        <TableCell>
         Customer ID
        </TableCell>

        <TableCell>
         Balance
        </TableCell>

        <TableCell>
         Status
        </TableCell>

       </TableRow>

      </TableHead>

      <TableBody>

       {accounts.map(
        (account)=>(

         <TableRow
          key={
           account.accountId
          }>

          <TableCell>
           {account.accountId}
          </TableCell>

          <TableCell>
           {account.customerId}
          </TableCell>

          <TableCell>
           ₹ {account.balance}
          </TableCell>

          <TableCell>
           {account.status}
          </TableCell>

         </TableRow>

       ))}

      </TableBody>

    </Table>

   </TableContainer>

  </MainLayout>
 );
}

export default AccountList;