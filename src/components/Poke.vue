<template>
  <div class="poke">
    <poke-image :imageurl="pokemon.sprites.front_default"></poke-image>
    <poke-name :name="pokemon.name"></poke-name>
    <poke-search v-on:get-fetch-data="fetchData"></poke-search>
    <poke-description></poke-description>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import PokeImage from './PokeImage.vue';
import PokeName from './PokeName.vue';
import PokeSearch from './PokeSearch.vue';
import PokeDescription from './PokeDescription.vue';

@Component({
  components: {
    PokeImage,
    PokeName,
    PokeSearch,
    PokeDescription,
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData(name = 'pikachu') {
      try {
        const pokemon = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}/`,
        );
        if (pokemon.data) {
          this.pokemon = pokemon.data;
        }
        console.log(this.pokemon);
      } catch (error) {
        console.log('error', error);
      }
    },
  },
  data() {
    return {
      pokemon: {
        sprites: {
          front_default: '',
        },
      },
    };
  },
})
export default class Poke extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.poke {
  border: 4px solid black;
  min-width: 300px;
  padding: 10px;
  background-color: red;
}
</style>
