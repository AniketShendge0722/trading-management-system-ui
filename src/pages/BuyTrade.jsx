import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import {
 Paper,
 Typography,
 TextField,
 Button
} from "@mui/material";

import { buyStock }
from "../api/tradeApi";

function BuyTrade(){

 const [trade,
 setTrade] =
 useState({

  accountId:"",
  stockSymbol:"",
  quantity:"",
  price:""
 });

 const handleChange =
 (e)=>{

  setTrade({

   ...trade,
   [e.target.name]:
   e.target.value
  });
 };

 const handleSubmit =
 async(e)=>{

  e.preventDefault();

  try{

   await buyStock(
    trade
   );

   alert(
    "Stock Purchased Successfully"
   );

  }catch(error){

   alert(
    error.response?.data?.message
   );
  }
 };

 return(

  <MainLayout>

   <Paper sx={{p:3}}>

    <Typography variant="h5">
      Buy Stock
    </Typography>

    <form onSubmit={handleSubmit}>

     <TextField
      fullWidth
      margin="normal"
      label="Account Id"
      name="accountId"
      onChange={handleChange}
     />

     <TextField
      fullWidth
      margin="normal"
      label="Stock Symbol"
      name="stockSymbol"
      onChange={handleChange}
     />

     <TextField
      fullWidth
      margin="normal"
      label="Quantity"
      name="quantity"
      onChange={handleChange}
     />

     <TextField
      fullWidth
      margin="normal"
      label="Price"
      name="price"
      onChange={handleChange}
     />

     <Button
      variant="contained"
      type="submit">

      Buy Stock

     </Button>

    </form>

   </Paper>

  </MainLayout>
 );
}

export default BuyTrade;