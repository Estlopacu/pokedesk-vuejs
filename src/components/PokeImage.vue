<template>
  <img :src="getImageUrl" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PokeImage",
  props: {
    images: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getImageUrl() {
      const randomImage: any = ["front_default", "front_shiny"];
      const index: any = Math.floor(Math.random() * 2 + 0);
      return this.images && this.images[randomImage[index]];
    },
  },
});
</script>

<style scoped lang="scss">
img {
  width: 140px;
  background: white;
  border-radius: 50%;
  border: 3px solid;
}
</style>
