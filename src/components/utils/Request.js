import axios from "axios";

const client = axios.create({
  baseURL: "https://salla111-001-site1.ptempurl.com",
});

export const Request = ({ ...options }) => {
  // client.defaults.headers.common.Authorization = `Bearer ${token}`;
  // client.interceptors.request.use((config) => {
  //   config.headers["authorization"] = "Bearer ";
  //   return config;
  // });
  return client(options);
};
