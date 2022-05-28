import http from "./HTTPcommon";

export const buyOffer = ({offerId}:{offerId:number}) => {
    return http({method: 'post', url: `/OfferInteraction/${offerId}/buy`});
} 