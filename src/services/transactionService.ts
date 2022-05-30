import http from "./HTTPcommon";
import { IOwner } from "./offerService";

export const getTransactions = () => {
  return http({ method: "get", url: "/Transaction" }).then(
    (response) => response.data
  );
};

export const getTransaction = ({
  transactionId,
}: {
  transactionId: number;
}) => {
  return http({ method: "get", url: `/Transaction/${transactionId}` }).then(
    (response) => response.data
  );
};

export interface IOfferShort {
  id: number;
  title: string;
  offerStatus: string;
  cost: number;
  imageUrl: string;
}
export interface ITransaction {
  id: number;
  offer: IOfferShort;
  seller: IOwner;
  buyer: IOwner;
  lastUpdateTime: string;
  cost: number;
  rating: number;
  status:string;
}
