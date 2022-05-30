import http from "./HTTPcommon";
import { ITransaction } from "./transactionService";

export const buyOffer = ({ offerId }: { offerId: number }) => {
  return http({ method: "post", url: `/OfferInteraction/${offerId}/buy` });
};

export const watchOffer = ({ offerId }: { offerId: number }) => {
  return http({ method: "put", url: `/OfferInteraction/watch/${offerId}` });
};

export const removeWatch = ({ offerId }: { offerId: number }) => {
  return http({ method: "delete", url: `/OfferInteraction/watch/${offerId}` });
};
export const startChat = (
  offerId: number,
  message: string
): Promise<ITransaction> => {
  return http({
    method: "post",
    url: `/OfferInteraction/${offerId}/openTransaction?message=${message}`,
  }).then((response) => response.data);
};
