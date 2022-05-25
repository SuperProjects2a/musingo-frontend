import http from "./HTTPcommon";
import {IUser} from "./userService"


export const getProfile = () =>{
    return http({method: 'get', url: 'Profile'})
           .then((response) => response.data);;
};