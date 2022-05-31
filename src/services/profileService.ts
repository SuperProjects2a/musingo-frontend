import http from "./HTTPcommon";
import { IOwner } from "./offerService";
import { ITransaction } from "./transactionService";


export const getProfile = () =>{
    return http({method: 'get', url: 'Profile'})
           .then((response) => response.data);;
};
export const putProfile = (data:IProfile) =>{
    return http({method: 'put', url: 'Profile',data: data})
           .then((response) => response.data);
};
export const getProfileOffers = () =>{
    return http({method: 'get', url: 'Profile/Offers'})
           .then((response) => response.data);;
};
export const getProfileComments = ():Promise<IRating[]> =>{
    return http({method: 'get', url: 'Profile/Comments'})
           .then((response) => response.data);;
};
export const getProfileRatings = () :Promise<IRating[]> =>{
    return http({method: 'get', url: 'Profile/Ratings'})
           .then((response) => response.data);;
};
export interface IProfile{
    email: string;
    name: string;
    surname: string;
    oldPassword:string;
    newPassword:string;
    imageUrl: string;
    phoneNumber: string;
    city: string;
    street: string;
    houseNumber: string;
    postCode: string;
    gender: string;
    birth: string;
}

export interface IRating {
    transaction:ITransaction;
    rating:number;
    commentText:string;
    user:IOwner;
}