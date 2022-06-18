<template>
  <label class="flex items-center gap-x-4 cursor-pointer">
    Couleur
    <input class="cursor-pointer" v-model="store.color" type="color" />
  </label>
</template>
<!-- Commande -->
<script setup>
import { useMappingStore } from "@/stores/MappingStore";

const store = useMappingStore();
</script>
