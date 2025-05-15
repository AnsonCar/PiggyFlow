import { api, getHeaders } from "@/lib/Requester";

export async function obtainToken(data: TokenObtainPairInputSchema) {
  const url = `/api/token/pair/`;
  const options = {
    method: 'post',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function refreshToken(data: TokenRefreshInputSchema) {
  const url = `/api/token/refresh/`;
  const options = {
    method: 'post',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function verifyToken(data: TokenVerifyInputSchema) {
  const url = `/api/token/verify/`;
  const options = {
    method: 'post',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}
