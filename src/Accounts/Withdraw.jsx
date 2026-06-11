import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import {
  Paper,
  Typography,
  TextField,
  Button
} from "@mui/material";

import { withdrawMoney }
from "../api/transactionApi";

function Withdraw() {

  const [form, setForm] = useState({
    accountId: "",
    amount: ""
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await withdrawMoney(form);

      alert(
        "Amount Withdrawn Successfully"
      );

    } catch (error) {

      alert(
        error.response?.data?.message
      );
    }
  };

  return (

    <MainLayout>

      <Paper sx={{ p: 3 }}>

        <Typography variant="h5">
          Withdraw Money
        </Typography>

        <form onSubmit={handleSubmit}>

          <TextField
            fullWidth
            margin="normal"
            label="Account Id"
            name="accountId"
            value={form.accountId}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Amount"
            name="amount"
            value={form.amount}
            onChange={handleChange}
          />

          <Button
            color="error"
            variant="contained"
            type="submit"
          >
            Withdraw
          </Button>

        </form>

      </Paper>

    </MainLayout>
  );
}

export default Withdraw;