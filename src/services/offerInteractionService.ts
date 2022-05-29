import http from "./HTTPcommon";

export const buyOffer = ({ offerId }: { offerId: number }) => {
  return http({ method: "post", url: `/OfferInteraction/${offerId}/buy` });
};

export const watchOffer = ({ offerId }: { offerId: number }) => {
  return http({ method: "put", url: `/OfferInteraction/watch/${offerId}` });
};
