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
export function getsUser() {
  const url = "user";
  const options = {
    method: "GET",
    headers: getHeaders(),
  };
  return api(url, options);
}

export function getUser(uuid) {
  const url = "user/" + uuid
  const options = {
    method: "GET",
    headers: getHeaders(),
  };
  return api(url, options);
}

export function addUser(data) {
  const url = "user";
  const options = {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return api(url, options);
}

export function editUser(data, uuid) {
  const url = "user/" + uuid;
  const options = {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return api(url, options);
}

export function delUser(uuid) {
  const url = "user/" + uuid;
  const options = {
    method: "DELETE",
    headers: getHeaders(),
  };
  return api(url, options);
}

// password
export function editUserPassword(data, uuid) {
  const url = "user/password/" + uuid;
  const options = {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return api(url, options);
}


// group
export function getUsersGroups() {
  const url = "user/group/get"
  const options = {
    method: "GET",
    headers: getHeaders(),
  };
  return api(url, options);
}

export function getUserGroup(uuid) {
  const url = "user/group/get/" + uuid;
  const options = {
    method: "GET",
    headers: getHeaders(),
  };
  return api(url, options);
}

export function addUserGroup(data, uuid) {
  const url = "user/group/add/" + uuid;
  const options = {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data)
  };
  return api(url, options);
}

export function removeUserGroup(data, uuid) {
  const url = "user/group/remove/" + uuid;
  const options = {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data)
  };
  return api(url, options);
}