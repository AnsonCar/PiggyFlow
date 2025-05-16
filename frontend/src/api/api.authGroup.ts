import { api, getHeaders } from "@/lib/Requester";

export async function getGroups() {
  const url = `/api/group`;
  const options = {
    method: 'get',
    headers: getHeaders(),
  };
  return await api(url, options);
}

export async function createGroup(data: GroupIn) {
  const url = `/api/group`;
  const options = {
    method: 'post',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function getGroup(uuid: number) {
  const url = `/api/group/${uuid}`;
  const options = {
    method: 'get',
    headers: getHeaders(),
  };
  return await api(url, options);
}

export async function updateGroup(data: GroupPut, uuid: number) {
  const url = `/api/group/${uuid}`;
  const options = {
    method: 'put',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function deleteGroup(uuid: number) {
  const url = `/api/group/${uuid}`;
  const options = {
    method: 'delete',
    headers: getHeaders(),
  };
  return await api(url, options);
}
