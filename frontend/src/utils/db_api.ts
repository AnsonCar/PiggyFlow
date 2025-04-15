import { useAuthStore } from '../stores/authStore';

export async function api(url: string, options: RequestInit | undefined) {
  // 取得 url 資源 和 選項
  const BasisApiURL = 'http://localhost:8000';
  try {
    // 請求
    const res = await fetch(`${BasisApiURL}${url}`, options);
    const data = await res.json();
    return data;
  } catch (error) {
    // 如果 請求失敗（Server 死咗 ）
    return {
      error: 'An error occurred.',
      code: 500,
      message: 'Server Error.',
    };
  }
}

export async function apiFile(url: string, options: RequestInit | undefined) {
  // 取得 url 資源 和 選項
  const BasisApiURL = 'http://localhost:8000';
  try {
    // 請求
    const res = await fetch(`${BasisApiURL}${url}`, options);
    const blob = await res.blob(); // 提取实际的文件内容
    return blob;
  } catch (error) {
    // 如果 請求失敗（Server 死咗 ）
    return {
      error: 'An error occurred.',
      code: 500,
      message: 'Server Error.',
    };
  }
}

export function getHeaders() {
  const authStore = useAuthStore();
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authStore.token}`,
  };
}

export async function obtainToken(data: TokenObtainPairInputSchema): Promise<TokenObtainPairOutputSchema> {
  const url = '/api/token/pair';
  const options = {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function refreshToken(data: TokenRefreshInputSchema): Promise<TokenRefreshOutputSchema> {
  const url = '/api/token/refresh';
  const options = {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function verifyToken(data: TokenVerifyInputSchema): Promise<Schema> {
  const url = '/api/token/verify';
  const options = {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function getUsers(): Promise<UserList> {
  const url = '/api/user';
  const options = {
    method: 'GET',
    headers: getHeaders(),
  };
  return await api(url, options);
}

export async function createUser(data: UserIn) {
  const url = '/api/user';
  const options = {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function getUser(uuid: string): Promise<UserOut> {
  const url = '/api/user/' + uuid;
  const options = {
    method: 'GET',
    headers: getHeaders(),
  };
  return await api(url, options);
}

export async function updateUser(data: UserPut, uuid: string) {
  const url = '/api/user/' + uuid;
  const options = {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function deleteUser(uuid: string) {
  const url = '/api/user/' + uuid;
  const options = {
    method: 'DELETE',
    headers: getHeaders(),
  };
  return await api(url, options);
}

export async function updateUserPassword(data: UserPutPassword, uuid: string) {
  const url = '/api/user/' + uuid + '/password';
  const options = {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function createUserGroup(data: UserGroup, uuid: string) {
  const url = '/api/user/' + uuid + '/group';
  const options = {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function deleteUserGroup(data: UserGroup, uuid: string) {
  const url = '/api/user/' + uuid + '/group';
  const options = {
    method: 'DELETE',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function getGroups(): Promise<GroupList> {
  const url = '/api/group';
  const options = {
    method: 'GET',
    headers: getHeaders(),
  };
  return await api(url, options);
}

export async function createGroup(data: GroupIn) {
  const url = '/api/group';
  const options = {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function getGroup(uuid: number): Promise<GroupOut> {
  const url = '/api/group/' + uuid;
  const options = {
    method: 'GET',
    headers: getHeaders(),
  };
  return await api(url, options);
}

export async function updateGroup(data: GroupPut, uuid: number) {
  const url = '/api/group/' + uuid;
  const options = {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function deleteGroup(uuid: number) {
  const url = '/api/group/' + uuid;
  const options = {
    method: 'DELETE',
    headers: getHeaders(),
  };
  return await api(url, options);
}

export async function getTransactions(): Promise<TransactionList> {
  const url = '/api/transaction';
  const options = {
    method: 'GET',
    headers: getHeaders(),
  };
  return await api(url, options);
}

export async function createTransaction(data: TransactionIn) {
  const url = '/api/transaction';
  const options = {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function getTransaction(uuid: string): Promise<TransactionOut> {
  const url = '/api/transaction/' + uuid;
  const options = {
    method: 'GET',
    headers: getHeaders(),
  };
  return await api(url, options);
}

export async function updateTransaction(data: TransactionIn, uuid: string) {
  const url = '/api/transaction/' + uuid;
  const options = {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function deleteTransaction(uuid: string) {
  const url = '/api/transaction/' + uuid;
  const options = {
    method: 'DELETE',
    headers: getHeaders(),
  };
  return await api(url, options);
}

export async function downloadTransactionCsv() {
  const url = '/api/transaction/download/csv';
  const options = {
    method: 'POST',
    headers: getHeaders(),
  };
  return await apiFile(url, options);
}

export async function getTodos(): Promise<ToDoList> {
  const url = '/api/todo';
  const options = {
    method: 'GET',
    headers: getHeaders(),
  };
  return await api(url, options);
}

export async function createTodo(data: ToDoIn) {
  const url = '/api/todo';
  const options = {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function getTodo(uuid: string): Promise<ToDoOut> {
  const url = '/api/todo/' + uuid;
  const options = {
    method: 'GET',
    headers: getHeaders(),
  };
  return await api(url, options);
}

export async function updateTodo(data: ToDoIn, uuid: string) {
  const url = '/api/todo/' + uuid;
  const options = {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function deleteTodo(uuid: string) {
  const url = '/api/todo/' + uuid;
  const options = {
    method: 'DELETE',
    headers: getHeaders(),
  };
  return await api(url, options);
}

export async function updateTodoDone(data: ToDoDone, uuid: string) {
  const url = '/api/todo/' + uuid + '/done';
  const options = {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify(data),
  };
  return await api(url, options);
}

export async function downloadTodoCsv() {
  const url = '/api/todo/download/csv';
  const options = {
    method: 'POST',
    headers: getHeaders(),
  };
  return await apiFile(url, options);
}
