import { refreshToken, verifyToken } from '@/api/api.token';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', {
  state: () =>
    ({
      token: undefined,
      refresh: undefined,
    }) as TAuth,
  getters: {},
  actions: {
    async isLogin(): Promise<boolean> {
      if (this.token && this.refresh) {
        const res = await verifyToken({ token: this.token });
        if (Object.keys(res).length === 0) {
          return true;
        } else {
          return this.reFresh();
        }
      }
      return false;
    },
    async reFresh() {
      if (this.token && this.refresh) {
        const refreshRes = await refreshToken({ refresh: this.refresh });
        if (refreshRes.refresh && refreshRes.access) {
          this.token = refreshRes.access;
          this.refresh = refreshRes.refresh;
          return true;
        }
      }
      return false;
    },
    async setToken(token: string, refresh: string): Promise<void> {
      this.token = token;
      this.refresh = refresh;
    },
    async logout(): Promise<void> {
      this.token = '';
      this.refresh = '';
      window.location.reload();
    },
  },
  persist: true,
});
