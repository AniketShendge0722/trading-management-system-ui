import React,

{

 useState

}

from "react";



import MainLayout

from "../layouts/MainLayout";



import {

 TextField,

 Button,

 Paper,

 Typography

}

from "@mui/material";



import {

 createCustomer

}

from "../api/customerApi";



import {

 useNavigate

}

from "react-router-dom";



function CustomerForm(){



 const navigate =

 useNavigate();



 const [customer,

 setCustomer] =

 useState({



   fullName:"",

   email:"",

   mobile:"",

   address:""

 });



 const handleChange =

 (e)=>{



   setCustomer({



     ...customer,



     [e.target.name]:

      e.target.value

   });

 };



 const handleSubmit =

 async(e)=>{



   e.preventDefault();



   await createCustomer(

       customer

   );



   navigate(

      "/customers"

   );

 };



 return(



  <MainLayout>



   <Paper

    sx={{

      p:3

    }}>



    <Typography

     variant="h5">



      Add Customer



    </Typography>



    <form

     onSubmit={

      handleSubmit

     }>



     <TextField

      fullWidth

      margin="normal"

      label="Full Name"

      name="fullName"

      onChange={

       handleChange

      }

     />



     <TextField

      fullWidth

      margin="normal"

      label="Email"

      name="email"

      onChange={

       handleChange

      }

     />



     <TextField

      fullWidth

      margin="normal"

      label="Mobile"

      name="mobile"

      onChange={

       handleChange

      }

     />



     <TextField

      fullWidth

      margin="normal"

      label="Address"

      name="address"

      onChange={

       handleChange

      }

     />



     <Button

      variant="contained"

      type="submit">



      Save



     </Button>



    </form>



   </Paper>



  </MainLayout>

 );

}



export default CustomerForm;