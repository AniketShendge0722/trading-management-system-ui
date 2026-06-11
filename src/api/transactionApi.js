import api from "./axiosConfig";

export const depositMoney = (data) =>
    api.post("/transactions/deposit", data);

export const withdrawMoney = (data) =>
    api.post("/transactions/withdraw", data);

export const getTransactions = (accountId) =>
    api.get(`/transactions/${accountId}`);