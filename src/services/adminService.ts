import http from "./HTTPcommon";


export const addRole = (data:IUpdateRole) =>{
    return http({method: 'post', url: 'Admin/AddRole',data:data});
};

export const removeRole = (data:IUpdateRole) =>{
    return http({method: 'post', url: 'Admin/RemoveRole',data:data});
};

export const userBanUnban = (userId:number) =>{
    return http({method: 'post', url: `Admin/UserBanUnban/${userId}`});
};

export const offerBanUnban = (userId:number) =>{
    return http({method: 'post', url: `Admin/OfferBanUnban/${userId}`});
};

export interface IUpdateRole{
    userId:number;
    role:number;
}