import axios from "axios";
import type { CreateAxiosDefaults } from "axios";
import { setupInterceptor } from "./interceptor.ts";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function createAxios(options: CreateAxiosDefaults = {}) {
  const defaultOptions: CreateAxiosDefaults = {
    baseURL: VITE_API_BASE_URL,
    timeout: 12000,
    headers: {
      "Content-Type": "application/www-form-urlencoded",
    },
  };
  const service = axios.create({ ...defaultOptions, ...options });
  setupInterceptor(service);
  return service;
}

export const request = createAxios();
