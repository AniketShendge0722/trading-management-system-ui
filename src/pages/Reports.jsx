import React,
{
 useEffect,
 useState
}
from "react";

import MainLayout
from "../layouts/MainLayout";

import api
from "../api/axiosConfig";

import {
 Grid,
 Card,
 CardContent,
 Typography
}
from "@mui/material";

function Reports(){

 const [report,
 setReport] =
 useState({});

 useEffect(()=>{

  loadReport();

 },[]);

 const loadReport =
 async()=>{

  const res =
  await api.get(
   "/dashboard"
  );

  setReport(
   res.data
  );
 };

 return(

  <MainLayout>

   <Typography
    variant="h4"
    sx={{mb:3}}>

    Reports Dashboard

   </Typography>

   <Grid
    container
    spacing={3}>

    <Grid item xs={12} md={4}>

     <Card>

      <CardContent>

       <Typography>
        Total Customers
       </Typography>

       <Typography
        variant="h4">

        {
         report.totalCustomers
        }

       </Typography>

      </CardContent>

     </Card>

    </Grid>

    <Grid item xs={12} md={4}>

     <Card>

      <CardContent>

       <Typography>
        Total Accounts
       </Typography>

       <Typography
        variant="h4">

        {
         report.totalAccounts
        }

       </Typography>

      </CardContent>

     </Card>

    </Grid>

    <Grid item xs={12} md={4}>

     <Card>

      <CardContent>

       <Typography>
        Total Trades
       </Typography>

       <Typography
        variant="h4">

        {
         report.totalTrades
        }

       </Typography>

      </CardContent>

     </Card>

    </Grid>

    <Grid item xs={12} md={6}>

     <Card>

      <CardContent>

       <Typography>
        Total Deposits
       </Typography>

       <Typography
        variant="h4">

        ₹ {
         report.totalDeposits
        }

       </Typography>

      </CardContent>

     </Card>

    </Grid>

    <Grid item xs={12} md={6}>

     <Card>

      <CardContent>

       <Typography>
        Total Withdrawals
       </Typography>

       <Typography
        variant="h4">

        ₹ {
         report.totalWithdrawals
        }

       </Typography>

      </CardContent>

     </Card>

    </Grid>

   </Grid>

  </MainLayout>
 );
}

export default Reports;