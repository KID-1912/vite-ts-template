import { request } from "@/utils/index.ts";

export function login(data: { username: string; password: string }) {
  return request.post("/login", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
