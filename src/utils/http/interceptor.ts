import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { resErrorPreHandle } from "./helpers.ts";

const reqResolve = (config: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem("loginToken") || "";
  config.headers.Authorization = accessToken;
  return config;
};

const reqReject = (error: any) => {
  return Promise.reject(error);
};

const SUCCESS_CODES = [200];
const resResolve = (response: AxiosResponse) => {
  const { status, data, request } = response;
  const code = data?.code || status;
  const message = data?.message || response.statusText;
  if (SUCCESS_CODES.includes(code)) {
    if (request.responseType === "blob") {
      return response; // blob类型响应数据
    }
    return data;
  } else {
    resErrorPreHandle(code, message);
    return Promise.reject({ code, message, data });
  }
};

const resReject = (error: any) => {
  const { data, status } = error.response || {};
  const code = data?.code || status;
  const message = data?.message || error.message;
  resErrorPreHandle(code, message);
  return Promise.reject({ code, message, data });
};

export function setupInterceptor(axiosInstance: AxiosInstance) {
  axiosInstance.interceptors.request.use(reqResolve, reqReject);
  axiosInstance.interceptors.response.use(resResolve, resReject);
}
