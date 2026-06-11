# 🎨 Trading Management System - Frontend

A modern React.js based frontend application for the Trading Management System, designed to provide a secure, responsive, and user-friendly interface for managing customers, trading accounts, transactions, stock trading, portfolio tracking, and analytics.

---

# 🚀 Project Overview

This frontend application communicates with the Trading Management System Backend APIs and provides a complete user interface for:

- Secure Login Authentication
- Customer Management
- Trading Account Management
- Fund Deposit & Withdrawal
- Buy & Sell Stocks
- Trade History Tracking
- Portfolio Monitoring
- Dashboard Analytics

The application is built using React.js, Material UI, Axios, and React Router.

---

# 🛠️ Technology Stack

### Frontend

- React.js
- JavaScript (ES6+)
- React Router DOM
- Axios
- Material UI (MUI)
- HTML5
- CSS3

---

# 📂 Project Structure

```text
src

├── api
│   ├── axiosConfig.js
│   ├── authApi.js
│   ├── customerApi.js
│   ├── accountApi.js
│   ├── transactionApi.js
│   ├── tradeApi.js
│   └── portfolioApi.js
│
├── pages
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Customers.jsx
│   ├── CustomerForm.jsx
│   ├── CustomerEdit.jsx
│   ├── AccountList.jsx
│   ├── CreateAccount.jsx
│   ├── Deposit.jsx
│   ├── Withdraw.jsx
│   ├── TradeHistory.jsx
│   ├── BuyTrade.jsx
│   ├── SellTrade.jsx
│   └── Portfolio.jsx
│
├── layouts
│   └── MainLayout.jsx
│
├── components
│   ├── Sidebar.jsx
│   ├── Navbar.jsx
│   └── ProtectedRoute.jsx
│
└── App.jsx
```

---

# ✨ Features

## Authentication Module

- User Login
- JWT Token Storage
- Protected Routes
- Secure API Communication

---

## Dashboard

- Trading System Overview
- Total Customers
- Total Accounts
- Total Trades
- Portfolio Summary

---

## Customer Management

- Add Customer
- Update Customer
- Delete Customer
- Search Customers
- View Customer Details

---

## Trading Account Management

- Create Trading Account
- View Account Information
- Balance Monitoring

---

## Transaction Module

### Deposit Funds

- Add Money to Trading Account
- Instant Balance Update

### Withdraw Funds

- Withdraw Available Balance
- Balance Validation

---

## Trading Module

### Buy Stock

- Purchase Stocks
- Balance Validation
- Holdings Update

### Sell Stock

- Sell Available Holdings
- Quantity Validation
- Balance Credit

---

## Trade History

- View All Trades
- BUY Transactions
- SELL Transactions
- Account-wise History

---

## Portfolio Management

- Holdings Overview
- Stock Quantity Tracking
- Average Purchase Price
- Portfolio Monitoring

---

# 🔐 Security Features

- JWT Authentication
- Protected Routes
- Authorization Header Interceptor
- Secure API Access
- Session Persistence

---

# 🌐 API Integration

Backend Base URL:

```text
http://localhost:8080/api
```

Axios Interceptor automatically attaches:

```http
Authorization: Bearer JWT_TOKEN
```

for every secured request.

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/AniketShendge2750/trading-ui.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

---

## Production Build

```bash
npm run build
```

---

# 📸 Application Modules

### Login Page

- JWT Authentication
- Secure Login

### Dashboard

- Trading Analytics
- System Statistics

### Customer Management

- Customer CRUD Operations

### Trading Accounts

- Account Creation
- Account Monitoring

### Transactions

- Deposit
- Withdraw

### Trading

- Buy Stock
- Sell Stock

### Portfolio

- Holdings Tracking

### Trade History

- Historical Trading Records

---

# 🎯 Highlights

- Modern React Architecture
- Responsive Material UI Design
- JWT Authentication Flow
- Protected Routing
- REST API Integration
- Reusable Components
- Scalable Folder Structure
- Production Ready Frontend Design

---

# 👨‍💻 Developed By

**Aniket Shendge**

Java Full Stack Developer

### Skills

- Java
- Spring Boot
- React.js
- REST APIs
- MySQL
- JWT Security
- Trading Systems

LinkedIn:
linkedin.com/in/aniket-shendge-a42266225

GitHub:
github.com/AniketShendge2750
