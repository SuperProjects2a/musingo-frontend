import http from "./HTTPcommon"
import { IOwner } from "./offerService";


export const getTransactions = () => {
    return http({method: 'get', url: '/Transaction'})
           .then(response=>response.data);
}

export interface IOfferShort{
    title:string;
    offerStatus:string;
    cost:number;
  }
export interface ITransaction{
    offer:IOfferShort;
    seller:IOwner;
    buyer:IOwner;
    lastUpdateTime:string;
    cost:number;
}