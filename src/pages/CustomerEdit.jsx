import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import {
  TextField,
  Button,
  Paper,
  Typography
} from "@mui/material";

import {
  getCustomerById,
  updateCustomer
} from "../api/customerApi";

import {
  useNavigate,
  useParams
} from "react-router-dom";

function CustomerEdit() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    fullName: "",
    email: "",
    mobile: "",
    address: ""
  });

  useEffect(() => {
    loadCustomer();
  }, []);

  const loadCustomer = async () => {
    const res = await getCustomerById(id);

    setCustomer(res.data);
  };

  const handleChange = (e) => {

    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await updateCustomer(id, customer);

    navigate("/customers");
  };

  return (
    <MainLayout>

      <Paper sx={{ p: 3 }}>

        <Typography variant="h5">
          Edit Customer
        </Typography>

        <form onSubmit={handleSubmit}>

          <TextField
            fullWidth
            margin="normal"
            label="Full Name"
            name="fullName"
            value={customer.fullName}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={customer.email}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Mobile"
            name="mobile"
            value={customer.mobile}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Address"
            name="address"
            value={customer.address}
            onChange={handleChange}
          />

          <Button
            variant="contained"
            type="submit"
          >
            Update
          </Button>

        </form>

      </Paper>

    </MainLayout>
  );
}

export default CustomerEdit;