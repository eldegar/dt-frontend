import axios, { AxiosInstance } from "axios";

export const axiosInstance = (): AxiosInstance => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const instance = axios.create({
    baseURL: import.meta.env.VITE_API,
    headers,
    params: { cache: Date.now() },
  });
  return instance;
};
