import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Trades() {

  const navigate = useNavigate();

  return (
    <MainLayout>

      <Paper sx={{ p: 3 }}>

        <Typography variant="h4" gutterBottom>
          Trading Module
        </Typography>

        <Button
          variant="contained"
          sx={{ mr: 2 }}
          onClick={() => navigate("/buy")}
        >
          Buy Stock
        </Button>

        <Button
          color="error"
          variant="contained"
          sx={{ mr: 2 }}
          onClick={() => navigate("/sell")}
        >
          Sell Stock
        </Button>

        <Button
          variant="outlined"
          onClick={() => navigate("/trade-history")}
        >
          Trade History
        </Button>

      </Paper>

    </MainLayout>
  );
}

export default Trades;