import http from "./HTTPcommon";


export const addRole = (data:IUpdateRole) =>{
    return http({method: 'post', url: 'Admin/AddRole',data:data});
};
export const reportedOffers = () =>{
    return http({method: 'get', url: 'Offer/ReportedOffers'})
           .then(response => response.data);
};
export const removeRole = (data:IUpdateRole) =>{
    return http({method: 'post', url: 'Admin/RemoveRole',data:data});
};

export const userBanUnban = (userId:number) =>{
    return http({method: 'post', url: `Admin/UserBanUnban/${userId}`});
};

export const offerBanUnban = (offerId:number) =>{
    return http({method: 'post', url: `Admin/OfferBanUnban/${offerId}`});
};

export interface IUpdateRole{
    userId:number;
    role:number;
}