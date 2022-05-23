import http from "./HTTPcommon"

export interface IOwner {
  name: string;
  surname: string;
  email: string;
  imageUrl: string;
  avgRating: number;
  phoneNumber: string;
}

export interface IAnnouncement {
  id: number;
  title: string;
  imageUrl: string;
  cost: number;
  offerStatus: string;
  itemCategory: string;
  description: string;
  owner: IOwner;
}

export const getOffers  = () : Promise<IAnnouncement[]> => {
  return http({method: 'get', url: '/Offer?Sorting=Latest', headers: {"Access-Control-Allow-Origin": "*"}})
    .then((response) => response.data);
}