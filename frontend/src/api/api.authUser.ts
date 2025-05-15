import { api, getHeaders } from "@/lib/Requester";

export async function getUsers() {
  const url = `/api/user`;
  const options = {
    method: 'get',
    headers: getHeaders(),
  };
  return await api(url, options);
}

export async function createUser(data: UserIn) {
  const url = `/api/user`;
  const options = {
    method: 'post',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function getUser(uuid: string) {
  const url = `/api/user/${uuid}`;
  const options = {
    method: 'get',
    headers: getHeaders(),
  };
  return await api(url, options);
}

export async function updateUser(data: UserPut, uuid: string) {
  const url = `/api/user/${uuid}`;
  const options = {
    method: 'put',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function deleteUser(uuid: string) {
  const url = `/api/user/${uuid}`;
  const options = {
    method: 'delete',
    headers: getHeaders(),
  };
  return await api(url, options);
}

export async function updateUserPassword(data: UserPutPassword, uuid: string) {
  const url = `/api/user/${uuid}/password`;
  const options = {
    method: 'patch',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function createUserGroup(data: UserGroup, uuid: string) {
  const url = `/api/user/${uuid}/group`;
  const options = {
    method: 'post',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function deleteUserGroup(data: UserGroup, uuid: string) {
  const url = `/api/user/${uuid}/group`;
  const options = {
    method: 'delete',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}
