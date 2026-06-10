import React,
{
 useEffect,
 useState
}
from "react";

import MainLayout
from "../layouts/MainLayout";

import {
 getCustomers,
 deleteCustomer
}
from "../api/customerApi";

import {
 Button,
 Paper,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 TextField,
 Typography
}
from "@mui/material";

import { useNavigate }
from "react-router-dom";

function Customers(){

 const navigate =
 useNavigate();

const [customers, setCustomers] = useState([]);
const [search, setSearch] = useState("");

const filteredCustomers = customers
  .filter((customer) =>
    customer.fullName.toLowerCase().includes(search.toLowerCase())
  );


 useEffect(()=>{

   loadCustomers();

 },[]);

 const loadCustomers =
 async()=>{

   const res =
   await getCustomers();

   setCustomers(
       res.data
   );
 };

 const handleDelete =
 async(id)=>{

   if(window.confirm(
       "Delete Customer ?")){

      await deleteCustomer(
          id
      );

      loadCustomers();
   }
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

      Customers

     </Typography>

     <Button
      variant="contained"
      onClick={()=>
       navigate(
        "/customers/add"
       )
      }>

      Add Customer

     </Button>

   </div>
   
<TextField label="Search Customer"sx={{ mb: 2 }} onChange={(e) =>
    setSearch(e.target.value)
  }
/>
   <TableContainer
    component={Paper}>
        

    <Table>

      <TableHead>

       <TableRow>

        <TableCell>ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>Actions</TableCell>

       </TableRow>

      </TableHead>

      <TableBody>

       {customers.map(
       (customer)=>(

        <TableRow
         key={
          customer.customerId
         }>

         <TableCell>
          {customer.customerId}
         </TableCell>

         <TableCell>
          {customer.fullName}
         </TableCell>

         <TableCell>
          {customer.email}
         </TableCell>

         <TableCell>
          {customer.mobile}
         </TableCell>

         <TableCell>

          <Button
           size="small"
           onClick={()=>
            navigate(
             `/customers/edit/${customer.customerId}`
            )
           }>

            Edit

          </Button>

          <Button
           color="error"
           size="small"
           onClick={()=>
            handleDelete(
             customer.customerId
            )
           }>

            Delete

          </Button>

         </TableCell>

        </TableRow>

       ))}

      </TableBody>

    </Table>

   </TableContainer>

  </MainLayout>
 );
}

export default Customers;