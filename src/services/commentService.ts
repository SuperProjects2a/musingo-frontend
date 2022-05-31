import http from "./HTTPcommon";

export const postComent = ({
  transactionId,
  rating,
  commentText,
}: {
  transactionId: number;
  rating: number;
  commentText: string;
}) => {
  return http({
    method: "post",
    url: "/Comment",
    data: { transactionId, rating, commentText },
  });
};
