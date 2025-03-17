<template>
  <div class="poke">
    <poke-image :images="pokemon.sprites" />
    <poke-name :pokemonName="pokemon.name" />
    <poke-search @get-pokemon-name="fetchData" />
    <poke-type :type="pokemon.types" />
    <poke-spec :spec="pokemon" />
    <poke-description :abilities="pokemon.abilities" />
  </div>
</template>

<script lang="ts">
import axios from "axios";
import PokeImage from "./PokeImage.vue";
import PokeName from "./PokeName.vue";
import PokeSearch from "./PokeSearch.vue";
import PokeDescription from "./PokeDescription.vue";
import PokeSpec from "./PokeSpec.vue";
import PokeType from "./PokeType.vue";

export default {
  name: "Poke",
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
    async fetchData(name = "pikachu") {
      try {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);
        this.pokemon = pokemon.data;
      } catch (error) {
        alert(error);
      }
    },
  },
  data() {
    return {
      pokemon: {
        sprites: {},
        name: "",
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.poke {
  border: 4px solid black;
  min-width: 300px;
  padding: 10px;
  background-color: gray;
}
</style>
