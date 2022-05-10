import http from "./HTTPcommon";

export const getUser = () => {
  return http.get("/User");
};
export const login = (data: any) => {
  return http.post("/User/login", data);
};
export const register = (data: any) => {
  return http.post("User/register", data);
};
