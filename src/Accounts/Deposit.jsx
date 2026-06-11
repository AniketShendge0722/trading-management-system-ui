import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import {
  Paper,
  Typography,
  TextField,
  Button
} from "@mui/material";

import { depositMoney }
from "../api/transactionApi";

function Deposit() {

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

      await depositMoney(form);

      alert(
        "Amount Deposited Successfully"
      );

      setForm({
        accountId: "",
        amount: ""
      });

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
          Deposit Money
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
            variant="contained"
            type="submit"
          >
            Deposit
          </Button>

        </form>

      </Paper>

    </MainLayout>
  );
}

export default Deposit;