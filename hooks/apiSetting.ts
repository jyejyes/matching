import axios from "axios";
import { AxiosError } from "axios";
import { getCookie } from "#/utils/Cookie/Cookie";

export const BASE_URL = "https://175.45.202.103";
axios.defaults.withCredentials = true;

//일단 쿠키 써봄
const token = getCookie("token");

export const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  httpsAgent: new (require("https").Agent)({
    rejectUnauthorized: false, //허가되지 않은 인증을 reject하지 않겠다!
  }),
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
