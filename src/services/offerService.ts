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
  imageUrls: string[];
  cost: number;
  offerStatus: string;
  itemCategory: string;
  description: string;
  owner: IOwner;
  city: string;
  createTime: string;
  email:string;
  phoneNumber:string;
}

export const getOffers  = () : Promise<IAnnouncement[]> => {
  return http({method: 'get', url: '/Offer?Sorting=Latest'})
    .then((response) => response.data);
}

export const getOffer = (id: number): Promise<IAnnouncement> => {
  return http({method: 'get', url: 'Offer/' + id})
    .then((response) => response.data);
}

export const putOffer = (data:IAnnouncement) => {
  return http({method: 'put', url: 'Offer',data: data})
    .then((response) => response.data);
}

export const getPromotedOffers  = () : Promise<IAnnouncement[]> => {
  return http({method: 'get', url: '/Offer/Promote'})
    .then((response) => response.data);
}
