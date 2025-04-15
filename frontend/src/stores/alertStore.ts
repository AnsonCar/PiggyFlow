import { generateUUID } from '@/utils/uuidHelper';
import { defineStore } from 'pinia';

export const useAlertStore = defineStore('alertStore', {
  state: () =>
    ({
      alertList: [],
      timeout: 4000,
    }) as TAlert,
  getters: {},
  actions: {
    addItem(data: TAlertItem) {
      const timeLog = new Date().toTimeString();
      this.alertList.push({ ...data, timeLog, uuid: generateUUID() });
      setTimeout(() => {
        this.alertList.shift();
      }, this.timeout);
    },
    clearItem() {
      this.alertList = [];
    },
  },
  persist: true,
});
