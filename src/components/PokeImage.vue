<template>
  <img :src="getImageUrl">
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: ['images'],
  data() {
    return { pokemonImage: '' };
  },
  computed: {
    getImageUrl() {
      const randomImage = ['front_default', 'front_shiny'];
      return (
        this.images
        && this.images[randomImage[Math.floor(Math.random() * 2 + 0)]]
      );
    },
  },
})
export default class PokeImage extends Vue {}
</script>

<style scoped lang="scss">
img {
  width: 140px;
}
</style>
