import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { createAccount } from "../api/accountApi";
import { useNavigate } from "react-router-dom";

function CreateAccount() {

  const navigate = useNavigate();

  const [account, setAccount] = useState({
    customerId: "",
    balance: 0
  });

  const handleChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await createAccount(account);

    navigate("/accounts");
  };

  return (
    <MainLayout>

      <Paper sx={{ p: 3 }}>

        <Typography variant="h5">
          Create Trading Account
        </Typography>

        <form onSubmit={handleSubmit}>

          <TextField
            fullWidth
            margin="normal"
            label="Customer Id"
            name="customerId"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Opening Balance"
            name="balance"
            onChange={handleChange}
          />

          <Button
            variant="contained"
            type="submit"
          >
            Create Account
          </Button>

        </form>

      </Paper>

    </MainLayout>
  );
}

export default CreateAccount;



aaddi backend  git la push karuya proper mg prt frontend karu code gela tr ky karu addi git la jaude saglal backend mla sang steps ky ky git chya 