import axios from "axios";

const client = axios.create({
  baseURL: "https://goservback.alyoumsa.com",
});

export const request = ({ ...options }) => {
  return client(options);
  //   client.defaults.headers.common.Authorization = `Bearer token`;
  //   client.interceptors.request.use((config) => {
  //     config.headers["authorization"] = "Bearer ";
  //     return config;
  //   });
};
