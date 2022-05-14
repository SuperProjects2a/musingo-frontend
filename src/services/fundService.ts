import http from "./HTTPcommon";

export const addFunds = (amount: number) => {
    return http({method: 'post', url: '/Wallet/AddBalance', params: {amount}})
}