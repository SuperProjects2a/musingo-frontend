import http from "./HTTPcommon";
import { ITransaction } from "./transactionService";

export const getMessages = (): Promise<IMessage[]> => {
  return http({ method: "get", url: "/Message" }).then(
    (response) => response.data
  );
};
export const sendMessage = (data: ISendMessage): Promise<IMessage> => {
  return http({ methso: "post", url: "/Message" }).then(
    (response) => response.data
  );
};
export const getChatWindow = (id:number): Promise<IMessage[]> => {
    return http({ method: "get", url: `/Message/${id}` }).then(
      (response) => response.data
    );
  };
export interface IMessage {
  sender: ISender;
  transaction: ITransaction;
  sendTime: string;
  text: string;
  unReadMessagesCount: number;
}
export interface ISender {
  name: string;
  surname: string;
  email: string;
  imageUrl: string;
}
export interface ISendMessage {
  transactionId: number;
  text: string;
}
