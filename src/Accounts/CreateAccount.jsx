import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box
} from "@mui/material";
import { createAccount } from "../api/accountApi";
import { useNavigate } from "react-router-dom";

function CreateAccount() {

  const navigate = useNavigate();
const [account, setAccount] = useState({
  customerId: "",
  balance: "",
  status: "ACTIVE"
});

  const handleChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

 await createAccount({
  customerId: Number(account.customerId),
  balance: Number(account.balance),
  status: account.status
});
      alert("Account Created Successfully");

      navigate("/accounts");

    } catch (error) {

      console.error(error);

      alert(
        error?.response?.data?.message ||
        "Failed to Create Account"
      );
    }
  };

  return (
    <MainLayout>

      <Paper
        sx={{
          p: 4,
          maxWidth: 600,
          mx: "auto"
        }}
      >

        <Typography
          variant="h5"
          gutterBottom
        >
          Create Trading Account
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
        >
{/* 
          <TextField
            fullWidth
            margin="normal"
            label="Account Number"
            name="accountNumber"
            value={account.accountNumber}
            onChange={handleChange}
            required
          /> */}

          <TextField
            fullWidth
            margin="normal"
            label="Customer ID"
            name="customerId"
            type="number"
            value={account.customerId}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            margin="normal"
            label="Opening Balance"
            name="balance"
            type="number"
            value={account.balance}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            margin="normal"
            label="Status"
            name="status"
            value={account.status}
            onChange={handleChange}
          />

          <Button
            variant="contained"
            type="submit"
            sx={{ mt: 2 }}
          >
            Create Account
          </Button>

        </Box>

      </Paper>

    </MainLayout>
  );
}

export default CreateAccount;