import axios from "axios";
import { AxiosError } from "axios";
import { getCookie } from "#/utils/Cookie/Cookie";

export const BASE_URL = "https://project-308.kro.kr";

axios.defaults.withCredentials = true;

//일단 쿠키 써봄
const token = getCookie("token");

export const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

apiClient.interceptors.request.use(
  (config: any) => {
    config.withCredentials = true;

    config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
