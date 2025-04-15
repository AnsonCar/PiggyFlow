import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('useLanguageStore', {
  state: () => ({
    lang: 'en',
    user: false,
  }),
  getters: {},
  actions: {},
  persist: true,
});
