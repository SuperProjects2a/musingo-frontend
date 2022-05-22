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
export const updateProfile = (data:IUpdateUser) => {
  return http({method:'put',url:'/Profile',data:data})
}
export const getProfile = () => {
  return http({method:'get',url:'/Profile'})
         .then((response) => response.data);
}
export interface IUpdateUser{
  email:string;
  name:string;
  surname:string;
  oldPassword:string;
  newPassword:string;
  imageUrl:string|undefined;
  phoneNumber:string;
  city:string;
  street:string;
  houseNumber:string;
  postCode:string;
  gender:string;
  birth:null;
}
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
