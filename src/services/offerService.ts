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
}

export interface IOfferFilter {
  Name: string | null;
  Category: string | null;
  PriceFrom: string | null;
  PriceTo: string | null;
  Sorting: string | null;
}

export const getOffers  = () : Promise<IAnnouncement[]> => {
  return http({method: 'get', url: '/Offer?Sorting=Latest'})
    .then((response) => response.data);
}

export const getOffersByName = (name: string | null): Promise<IAnnouncement[]> => {
  if(name === null || name === '') return getOffers();

  return http({method:'get', url: 'Offer', params: {Sorting: 'Latest', Search: name}})
    .then((response) => response.data);
}

export const getOffersByFiler = (offerFilter: IOfferFilter): Promise<IAnnouncement[]> => {
  return http({method:'get', url: 'Offer', params: offerFilter})
      .then((response) => response.data); 
}

export const getOffer = (id: number): Promise<IAnnouncement> => {
  return http({method: 'get', url: 'Offer/' + id})
    .then((response) => response.data);
}