<script>
import NavItem from "./components/NavItem.vue";
import NavTab from "./components/NavTab.vue";
import ColorPicker from "./components/ColorPicker.vue";
// Commentaire
export default {
  components: {
    NavItem,
    NavTab,
    ColorPicker,
  },
};
</script>

<template>
  <header>
    <h1 class="text-4xl font-bold mb-4">MapGen</h1>
    <address class="not-italic">
      Conçu par
      <a
        class="text-blue-600 underline"
        href="https://github.com/Jocabin"
        target="_blank"
        >Jocabin</a
      >
      et
      <a
        class="text-blue-600 underline"
        href="https://github.com/gtjesrad"
        target="_blank"
        >Ruben.B</a
      >
    </address>
  </header>

  <div>
    <canvas></canvas>

    <section
      id="properties-panel"
      class="flex flex-col justify-start items-start gap-y-4"
    >
      <div id="tabs">
        <ul class="flex align-middle justify-start gap-x-4">
          <NavItem tab-index="0">Coeur de cible</NavItem>
          <NavItem tab-index="1">Cible principale</NavItem>
          <NavItem tab-index="2">Cible secondaire</NavItem>
          <NavItem tab-index="3">Ajouter</NavItem>
        </ul>

        <NavTab tab-index="0">Coeur de cible</NavTab>
        <NavTab tab-index="1">Cible principale</NavTab>
        <NavTab tab-index="2">Cible secondaire</NavTab>
        <NavTab tab-index="3">Ajouter</NavTab>
      </div>

      <ColorPicker />

      <button class="inline-flex px-6 py-2 bg-blue-700 text-white">
        Exporter
      </button>
    </section>
  </div>
</template>
