import http from "./HTTPcommon";

export const addFunds = (amount: number) => {
    return http.post("/Wallet/AddBalance", {}, {params: {amount}});
}