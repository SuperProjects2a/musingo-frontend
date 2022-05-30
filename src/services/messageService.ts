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
export const getChatWindow = (id: number): Promise<IMessage[]> => {
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
export const convertTime = (dateTime: string) => {
  let currentDay = new Date();
  let date = new Date(dateTime);    
  let diffInDays = Math.floor(
    (currentDay.getTime() - date.getTime()) / (1000 * 3600 * 24)
  );
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let year = date.getFullYear();
  let dayName = date.toLocaleDateString("pl", { weekday: "short" });
  let monthName = date.toLocaleDateString("pl", { month: "short" });
  let dayOfTheMonth = date.getDate();
  let day = date.getDate();
  let hours = date.getHours();
  let minutes: number | string = date.getMinutes();
  hours = hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let today = `${hours}:${minutes}`
  let yesterDay = `Wczoraj, ${hours}:${minutes}`
  let lessThanSeven = `${dayName} ${hours}:${minutes}`;
  let moreThanSeven = `${dayOfTheMonth} ${monthName} ${year}, ${hours}:${minutes}`
  let strTime = diffInDays === 0 ? today : diffInDays === 1 ? yesterDay: diffInDays < 7 ? lessThanSeven : moreThanSeven;
  return strTime;
};
