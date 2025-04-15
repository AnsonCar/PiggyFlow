import { useAuthStore } from '../stores/authStore';
export async function isLoggedIn(): Promise<boolean> {
  const authStore = useAuthStore();
  const isLoggedIn: boolean = await authStore.isLogin();
  return isLoggedIn;
}
