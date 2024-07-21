import { api, apiFile } from "~/utils/db/db";
import { setCookie, getCookie } from "~/utils/cookies.js";

export function getHeaders() {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${getCookie("token")}`,
  };
}

// api
export function getsGroup() {
  const url = "group";
  const options = {
    method: "GET",
    headers: getHeaders(),
  };
  return api(url, options);
}

export function addGroup(data) {
  const url = "group";
  const options = {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return api(url, options);
}

export function getGroup(uuid) {
  const url = "group/" + uuid;
  const options = {
    method: "GET",
    headers: getHeaders(),
  };
  return api(url, options);
}

export function editGroup(data, uuid) {
  const url = "group/" + uuid;
  const options = {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return api(url, options);
}

export function delGroup(uuid) {
  const url = "group/" + uuid;
  const options = {
    method: "DELETE",
    headers: getHeaders(),
  };
  return api(url, options);
}
