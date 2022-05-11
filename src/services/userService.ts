import http from "./HTTPcommon";

export const getUser = () => {
  return http.get("/User").then((response) => response.data);
};
export const login = (data: any) => {
  return http.post("/User/login", data);
};
export const register = (data: any) => {
  return http.post("User/register", data);
};
export interface IUser {
  avgRating: number;
  birth: string;
  city: string;
  email: string;
  gender: string;
  houseNumber: string;
  imageUrl: null;
  name: string;
  phoneNumber: string;
  postCode: string;
  street: string;
  surname: string;
  walletBalance: string;
}
