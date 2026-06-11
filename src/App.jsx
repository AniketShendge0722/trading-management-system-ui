import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import CustomerForm from "./pages/CustomerForm";
import CustomerEdit from "./pages/CustomerEdit";

import AccountList from "./Accounts/AccountList";
import CreateAccount from "./Accounts/CreateAccount";
import Deposit from "./Accounts/Deposit";
import Withdraw from "./Accounts/Withdraw";

import TransactionHistory from "./pages/TransactionHistory";

import BuyTrade from "./pages/BuyTrade";
import SellTrade from "./pages/SellTrade";
import TradeHistory from "./pages/TradeHistory";

import Portfolio from "./pages/Portfolio";
import Reports from "./pages/Reports";

import ProtectedRoute from "./components/ProtectedRoute";
import darkTheme from "./api/theme";
import Trades from "./pages/Trades";

function App() {

  return (

    <ThemeProvider theme={darkTheme}>

      <BrowserRouter>

        <Routes>

          {/* Public Route */}

          <Route
            path="/"
            element={<Login />}
          />

          {/* Protected Routes */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/customers"
            element={
              <ProtectedRoute>
                <Customers />
              </ProtectedRoute>
            }
          />

          <Route
            path="/customers/add"
            element={
              <ProtectedRoute>
                <CustomerForm />
              </ProtectedRoute>
            }
          />

          <Route
            path="/customers/edit/:id"
            element={
              <ProtectedRoute>
                <CustomerEdit />
              </ProtectedRoute>
            }
          />

          <Route
            path="/accounts"
            element={
              <ProtectedRoute>
                <AccountList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/accounts/create"
            element={
              <ProtectedRoute>
                <CreateAccount />
              </ProtectedRoute>
            }
          />

          <Route
            path="/deposit"
            element={
              <ProtectedRoute>
                <Deposit />
              </ProtectedRoute>
            }
          />

          <Route
            path="/withdraw"
            element={
              <ProtectedRoute>
                <Withdraw />
              </ProtectedRoute>
            }
          />

          <Route
            path="/transactions"
            element={
              <ProtectedRoute>
                <TransactionHistory />
              </ProtectedRoute>
            }
          />

          <Route
            path="/buy"
            element={
              <ProtectedRoute>
                <BuyTrade />
              </ProtectedRoute>
            }
          />

          <Route
            path="/sell"
            element={
              <ProtectedRoute>
                <SellTrade />
              </ProtectedRoute>
            }
          />

          <Route
            path="/trade-history"
            element={
              <ProtectedRoute>
                <TradeHistory />
              </ProtectedRoute>
            }
          />

          <Route
            path="/portfolio"
            element={
              <ProtectedRoute>
                <Portfolio />
              </ProtectedRoute>
            }
          />

          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <Reports />
              </ProtectedRoute>
            }
          />
<Route
  path="/trades"
  element={
    <ProtectedRoute>
      <Trades />
    </ProtectedRoute>
  }
/>
        </Routes>

      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;