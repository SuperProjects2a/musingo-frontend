import http from "./HTTPcommon";
import { ITransaction } from "./transactionService";

export const getMessages  = () : Promise<IMessage[]> => {
    return http({method: 'get', url: '/Message'})
      .then((response) => response.data);
  }
  export interface IMessage{
      sender:ISender;
      transaction:ITransaction;
      sendTime:string;
      text:string;
      unReadMessagesCount:number;
  }
  export interface ISender{
      name:string;
      surname:string;
      email:string;
      imageUrl:string;
  }