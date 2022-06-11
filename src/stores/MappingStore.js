import { defineStore } from "pinia";

export const useMappingStore = defineStore("MappingStore", {
  state: () => ({
    color: "",
  }),
  getters: {
    getColor: (state) => state.color,
  },
  actions: {
    setColor(newColor) {
      this.color = newColor;
    },
  },
});
