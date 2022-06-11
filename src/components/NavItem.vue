<template>
  <li>
    <button
      @click="currentTab(props.tabIndex)"
      class="inline-flex px-4 py-2 bg-blue-500 text-white"
    >
      <slot></slot>
    </button>
  </li>
</template>

<script setup>
import { useTabStore } from "@/stores/TabStore";

const store = useTabStore();
const props = defineProps({
  tabIndex: {
    type: String,
  },
});

function currentTab(tabNumber) {
  store.setTab(tabNumber);
}
</script>

<style lang="scss" scoped></style>
