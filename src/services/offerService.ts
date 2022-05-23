import http from "./HTTPcommon"

export interface IAnnouncement {
  title: string;
  imageUrl: string;
  cost: number;
  offerStatus: string;
  itemCategory: string;
  description: string;
}

export const getOffers  = () : Promise<IAnnouncement[]> => {
  return http({method: 'get', url: '/Offer?Sorting=Latest', headers: {"Access-Control-Allow-Origin": "*"}})
    .then((response) => response.data);
}