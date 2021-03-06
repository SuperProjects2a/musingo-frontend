import http from "./HTTPcommon";

export const getUser = () => {
  return http({method: 'get', url: '/User'})
    .then((response) => response.data);
};
export const login = (data: any) => {
  return http({method: 'post', url: '/User/login', data: data});
};
export const register = (data: IUserRegisterData) => {
  return http({method: 'post', url: '/User/register', data: data});
};
export interface IUser {
  avgRating: number;
  birth: string;
  city: string;
  email: string;
  gender: string;
  houseNumber: string;
  imageUrl: string;
  name: string;
  phoneNumber: string;
  postCode: string;
  street: string;
  surname: string;
  walletBalance: string;
  role: string;
  isBanned: boolean;
}

export interface IUserRegisterData {
  name: string,
  surname: string,
  email: string,
  phoneNumber: string,
  acceptedTOS: boolean,
  password: string
}
