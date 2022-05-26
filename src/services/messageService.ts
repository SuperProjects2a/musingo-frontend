import http from "./HTTPcommon";

export const getMessages  = () : Promise<IMessage[]> => {
    return http({method: 'get', url: '/Message'})
      .then((response) => response.data);
  }
  export interface IMessage{
      sender:ISender;
      transcationId:number;
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