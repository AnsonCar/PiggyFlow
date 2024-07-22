import { api, apiFile } from "~/utils/db/db";
import { setCookie, getCookie } from "~/utils/cookies.js";

export function getHeaders() {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${getCookie("token")}`,
  };
}

export function getsTodo() {
  const url = "todo";
  const options = {
    method: "GET",
    headers: getHeaders(),
  };
  return api(url, options);
}

export function addTodo(data) {
  const url = "todo";
  const options = {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return api(url, options);
}

export function editTodo(data, uuid) {
  const url = "todo/" + uuid;
  const options = {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return api(url, options);
}

export function delTodo(uuid) {
  const url = "todo/" + uuid;
  const options = {
    method: "DELETE",
    headers: getHeaders(),
  };
  return api(url, options);
}

export function downloadTodoCSV() {
  const url = "todo/download/csv";
  const options = {
    method: "POST",
    headers: getHeaders(),
  };
  return apiFile(url, options).then((res) => {
    const url = window.URL.createObjectURL(new Blob([res]));
    const link = document.createElement("a");
    link.href = url;
    const filename = `todo.csv`;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}

export function editTodoDone(data, uuid) {
  const url = "todo/done/" + uuid;
  const options = {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return api(url, options);
}
