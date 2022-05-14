import http from "./HTTPcommon";


export const addRoleAd = (data:IUpdateRole) =>{
    return http({method: 'post', url: 'Admin/AddRole',data:data});
};

export const removeRoleAd = (data:IUpdateRole) =>{
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