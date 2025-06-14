import { useAlertStore } from '@/stores/alertStore';
import { useAuthStore } from '@/stores/authStore';

const serverError = {
  error: 'An error occurred.',
  code: 500,
  message: 'Server Error.',
};

export async function api(url: string, options: RequestInit | undefined) {
  // 取得 url 資源 和 選項
  const BasisApiURL = 'http://localhost:8000';
  const alertStore = useAlertStore();
  try {
    const authStore = useAuthStore();
    if (!url.startsWith('/api/token')) {
      authStore.reFresh();
    }
    // 請求
    const res = await fetch(`${BasisApiURL}${url}`, options);
    const data = await res.json();
    if (!url.startsWith('/api/token')) {
      let message = '';
      if (res.status !== 200) {
        message = res.statusText;
      }
      if ('detail' in data) {
        message = data.detail;
      }
      if (message.length > 0) {
        alertStore.addItem({
          message: message,
          level: 'error',
        });
      }
    }
    return data;
  } catch (error) {
    // 如果 請求失敗（Server 死咗 ）
    return serverError;
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
    return serverError;
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
