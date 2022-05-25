import http from "./HTTPcommon";


export const getProfile = () =>{
    return http({method: 'get', url: 'Profile'})
           .then((response) => response.data);;
};
export const putProfile = (data:any) =>{
    return http({method: 'put', url: 'Profile',data: data})
           .then((response) => response.data);
};
export const getProfileOffers = () =>{
    return http({method: 'get', url: 'Profile/Offers'})
           .then((response) => response.data);;
};
export const getProfileComments = () =>{
    return http({method: 'get', url: 'Profile/Comments'})
           .then((response) => response.data);;
};
export const getProfileRatings = () =>{
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
export interface IOffer{
    id:number;
    title:string;
    imageUrl:string;
    cost:number;
    offerStatus:string;
    itemCategory:string;
}