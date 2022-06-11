<template>
  <div class="border-black border" v-if="getTab == props.tabIndex">
    <slot></slot>
  </div>
</template>

<script setup>
import { useTabStore } from "@/stores/TabStore";
import { storeToRefs } from "pinia";

const store = useTabStore();
const { getTab } = storeToRefs(store);
const props = defineProps({
  tabIndex: {
    type: String,
  },
});
</script>
