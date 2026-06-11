import api from "./axiosConfig";

export const buyStock = (data) =>
    api.post("/trades/buy", data);

export const sellStock = (data) =>
    api.post("/trades/sell", data);

export const getTradeHistory = (accountId) =>
    api.get(`/trades/${accountId}`);