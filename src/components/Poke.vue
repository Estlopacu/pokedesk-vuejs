<template>
  <div class="poke">
    <poke-image :images="pokemon.sprites"></poke-image>
    <poke-name :pokemonName="pokemon.name"></poke-name>
    <poke-search></poke-search>
    <poke-type :type="pokemon.types"></poke-type>
    <poke-spec :spec="pokemon"></poke-spec>
    <poke-description :abilities="pokemon.abilities"></poke-description>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import PokeImage from './PokeImage.vue';
import PokeName from './PokeName.vue';
import PokeSearch from './PokeSearch.vue';
import PokeDescription from './PokeDescription.vue';
import PokeSpec from './PokeSpec.vue';
import PokeType from './PokeType.vue';

@Component({
  components: {
    PokeImage,
    PokeName,
    PokeSearch,
    PokeDescription,
    PokeSpec,
    PokeType,
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
        this.pokemon = pokemon.data;
        console.log(pokemon.data);
      } catch (error) {
        console.log('error', error);
      }
    },
  },
  data() {
    return {
      pokemon: {},
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
