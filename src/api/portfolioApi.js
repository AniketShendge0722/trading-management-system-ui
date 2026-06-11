import api from "./axiosConfig";

export const getPortfolio = (accountId) =>
    api.get(`/portfolio/${accountId}`);