import axios from "axios";
import navigationService from "./NavigationService";

var client = axios.create({
  baseURL: "https://musingo-backend.azurewebsites.net/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

const request = (options: any) => {
  const onSuccess = (response: any) => {
    return response;
  };

  const onError = (error: any) => {
    if (error.response) {
      if (error.response.status === 401) {
        navigationService.navigation("/SignInUp");
        localStorage.removeItem("token");
      } else if (error.response.status === 403) {
        navigationService.navigation("/Error403");
      } else if (error.response.status === 404) {
        navigationService.navigation("/Error404");
      }
    }
    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;

//https://localhost:7062/api
//https://musingo-backend.azurewebsites.net/api
