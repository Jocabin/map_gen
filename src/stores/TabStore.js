import { defineStore } from "pinia";

export const useTabStore = defineStore("TabStore", {
  state: () => ({
    tab: 0,
  }),
  getters: {
    getTab: (state) => state.tab,
  },
  actions: {
    setTab(n) {
      this.tab = n;
    },
  },
});
