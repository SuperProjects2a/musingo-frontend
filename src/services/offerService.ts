import { StringLiteralLike } from "typescript";
import http from "./HTTPcommon";

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
  email: string;
  phoneNumber: string;
  isPromoted: boolean;
  isWatched: boolean;
}

export interface IOfferFilter {
  Search: string | null;
  Category: string | null;
  PriceFrom: string | null;
  PriceTo: string | null;
  Sorting: string | null;
}
export interface ICreateOffer {
  title: string;
  description: string;
  cost: number;
  itemCategory: string;
  imageUrls: string[];
  email: string;
  city: string;
  phoneNumber: string;
}
export interface ICreateReport {
  offerId: number;
  reason: string;
  text: string;
}

export const getOffers = (): Promise<IAnnouncement[]> => {
  return http({ method: "get", url: "/Offer?Sorting=Latest" }).then(
    (response) => response.data
  );
};

export const getWatchedOffers = (): Promise<IAnnouncement[]> => {
  return http({ method: "get", url: "/OfferInteraction/watch" }).then(
    (response) => response.data
  );
};

export const getOffersByName = (
  name: string | null
): Promise<IAnnouncement[]> => {
  if (name === null || name === "") return getOffers();

  return http({
    method: "get",
    url: "Offer",
    params: { Sorting: "Latest", Search: name },
  }).then((response) => response.data);
};

export const getOffersByFiler = (
  offerFilter: IOfferFilter
): Promise<IAnnouncement[]> => {
  return http({ method: "get", url: "Offer", params: offerFilter }).then(
    (response) => response.data
  );
};

export const getOffer = (id: number): Promise<IAnnouncement> => {
  return http({ method: "get", url: "Offer/" + id }).then(
    (response) => response.data
  );
};

export const putOffer = (data: IAnnouncement) => {
  return http({ method: "put", url: "Offer", data: data }).then(
    (response) => response.data
  );
};

export const putPromote = (offerId: number): Promise<IAnnouncement> => {
  return http({ method: "put", url: "/Offer/Promote/" + offerId }).then(
    (response) => response.data
  );
};

export const getPromotedOffers = (): Promise<IAnnouncement[]> => {
  return http({ method: "get", url: "/Offer/Promote" }).then(
    (response) => response.data
  );
};
export const getUserOtherOffers = (
  email: string,
  offerId: number
): Promise<IAnnouncement[]> => {
  return http({
    method: "get",
    url: `/Offer/User?Email=${email}&OfferId=${offerId}`,
  }).then((response) => response.data);
};
export const postOffer = (data: ICreateOffer): Promise<IAnnouncement> => {
  return http({ method: "post", url: `/Offer`, data: data }).then(
    (response) => response.data
  );
};
export const reportOffer = (data: ICreateReport) => {
  return http({ method: "post", url: `/Offer/Report`, data: data }).then(
    (response) => response.data
  );
};
