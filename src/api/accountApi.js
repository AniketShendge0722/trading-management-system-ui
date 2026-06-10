import api from "./axiosConfig";

export const getAccounts = () =>
    api.get("/accounts");

export const createAccount = (data) =>
    api.post("/accounts", data);

export const depositAmount = (data) =>
    api.post("/transactions/deposit", data);

export const withdrawAmount = (data) =>
    api.post("/transactions/withdraw", data);