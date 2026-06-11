import React, { useEffect, useState } from "react";

import api from "../api/axiosConfig";
import MainLayout from "../layouts/MainLayout";

import {
 Grid,
 Card,
 CardContent,
 Typography,
 Box
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function Dashboard() {

 const [data, setData] = useState({});

 useEffect(() => {
  loadDashboard();
 }, []);

 const loadDashboard = async () => {

  try {

   const res = await api.get("/dashboard");

   setData(res.data);

  } catch (error) {

   console.log(error);
  }
 };

 const cards = [

  {
   title: "Customers",
   value: data.totalCustomers || 0,
   icon: <PeopleIcon fontSize="large" />
  },

  {
   title: "Accounts",
   value: data.totalAccounts || 0,
   icon: <AccountBalanceIcon fontSize="large" />
  },

  {
   title: "Trades",
   value: data.totalTrades || 0,
   icon: <TrendingUpIcon fontSize="large" />
  },

  {
   title: "Deposits",
   value: `₹ ${data.totalDeposits || 0}`,
   icon: <CurrencyRupeeIcon fontSize="large" />
  },

  {
   title: "Withdrawals",
   value: `₹ ${data.totalWithdrawals || 0}`,
   icon: <CurrencyRupeeIcon fontSize="large" />
  }
 ];

 return (

  <MainLayout>

   <Typography
    variant="h4"
    gutterBottom
   >
    Dashboard
   </Typography>

   <Grid container spacing={3}>

    {cards.map((card, index) => (

     <Grid
      item
      xs={12}
      sm={6}
      md={4}
      key={index}
     >

      <Card
       sx={{
        borderRadius: 3,
        boxShadow: 4
       }}
      >

       <CardContent>

        <Box
         display="flex"
         justifyContent="space-between"
         alignItems="center"
        >

         <Box>

          <Typography
           color="text.secondary"
          >
           {card.title}
          </Typography>

          <Typography
           variant="h4"
          >
           {card.value}
          </Typography>

         </Box>

         {card.icon}

        </Box>

       </CardContent>

      </Card>

     </Grid>

    ))}

   </Grid>

  </MainLayout>
 );
}

export default Dashboard;