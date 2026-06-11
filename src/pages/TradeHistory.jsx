import React, { useState } from "react";

import MainLayout from "../layouts/MainLayout";

import { getTradeHistory } from "../api/tradeApi";

import {
  Paper,
  Typography,
  TextField,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer
} from "@mui/material";

function TradeHistory() {

  const [accountId, setAccountId] = useState("");

  const [trades, setTrades] = useState([]);

  const loadTrades = async () => {

    try {

      const res = await getTradeHistory(accountId);

      setTrades(res.data.data);

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Unable To Fetch Trade History"
      );
    }
  };

  return (

    <MainLayout>

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          Trade History
        </Typography>

        <TextField
          label="Account Id"
          value={accountId}
          onChange={(e) =>
            setAccountId(e.target.value)
          }
        />

        <Button
          sx={{ ml: 2 }}
          variant="contained"
          onClick={loadTrades}
        >
          Search
        </Button>

      </Paper>

      <TableContainer component={Paper}>

        <Table>

          <TableHead>

            <TableRow>

              <TableCell>Trade ID</TableCell>

              <TableCell>Symbol</TableCell>

              <TableCell>Type</TableCell>

              <TableCell>Quantity</TableCell>

              <TableCell>Price</TableCell>

              <TableCell>Status</TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {trades.map((trade) => (

              <TableRow key={trade.tradeId}>

                <TableCell>
                  {trade.tradeId}
                </TableCell>

                <TableCell>
                  {trade.stockSymbol}
                </TableCell>

                <TableCell>
                  {trade.tradeType}
                </TableCell>

                <TableCell>
                  {trade.quantity}
                </TableCell>

                <TableCell>
                  ₹ {trade.price}
                </TableCell>

                <TableCell>
                  {trade.status}
                </TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>

      </TableContainer>

    </MainLayout>
  );
}

export default TradeHistory;