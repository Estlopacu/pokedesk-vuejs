<template>
  <img :src="getImageUrl">
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

declare module 'vue/types/vue' {
  interface Vue {
    images: Array<any>;
  }
}

@Component({
  props: ['images'],
  data() {
    return { pokemonImage: '' };
  },
  computed: {
    getImageUrl() {
      const randomImage: any = ['front_default', 'front_shiny'];
      const index: any = Math.floor(Math.random() * 2 + 0);
      return this.images && this.images[randomImage[index]];
    },
  },
})
export default class PokeImage extends Vue {}
</script>

<style scoped lang="scss">
img {
  width: 140px;
  background: white;
  border-radius: 50%;
  border: 3px solid;
}
</style>
