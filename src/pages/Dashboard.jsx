import React,{useEffect,useState}
from "react";

import api from "../api/axiosConfig";

import MainLayout
from "../layouts/MainLayout";

import {
 Grid,
 Card,
 CardContent,
 Typography
}
from "@mui/material";

function Dashboard(){

 const [data,setData] =
 useState({});

 useEffect(()=>{

   loadDashboard();

 },[]);

 const loadDashboard =
 async()=>{

   const res =
   await api.get("/dashboard");

   setData(res.data);
 };

 return(

  <MainLayout>

   <Grid
     container
     spacing={3}>

    <Grid size={4}>

      <Card>

       <CardContent>

        <Typography
         variant="h6">

         Customers

        </Typography>

        <Typography
         variant="h4">

         {data.totalCustomers}

        </Typography>

       </CardContent>

      </Card>

    </Grid>

    <Grid size={4}>

      <Card>

       <CardContent>

        <Typography
         variant="h6">

         Accounts

        </Typography>

        <Typography
         variant="h4">

         {data.totalAccounts}

        </Typography>

       </CardContent>

      </Card>

    </Grid>

    <Grid size={4}>

      <Card>

       <CardContent>

        <Typography
         variant="h6">

         Trades

        </Typography>

        <Typography
         variant="h4">

         {data.totalTrades}

        </Typography>

       </CardContent>

      </Card>

    </Grid>

   </Grid>

  </MainLayout>

 );
}

export default Dashboard;