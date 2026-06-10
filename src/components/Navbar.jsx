import React from "react";
import {
 AppBar,
 Toolbar,
 Typography,
 Button
} from "@mui/material";

const Navbar = () => {

 const logout = () => {

   localStorage.clear();

   window.location.href="/";
 };

 return (

   <AppBar
     position="static">

     <Toolbar>

       <Typography
         sx={{flexGrow:1}}
         variant="h6">

         Trading Management System

       </Typography>

       <Button
         color="inherit"
         onClick={logout}>

         Logout

       </Button>

     </Toolbar>

   </AppBar>
 );
};

export default Navbar;