<template>
  <div class="poke">
    <h3 v-if="isFetching">Loading...</h3>
    <span v-else-if="isError">
      <h3>{{ error.response?.status === 404 ? "Pokémon not found!" : error.message }}</h3>
      <button class="pokemon-name-button" @click="() => fetchNewPokemon('pikachu')">
        New Search
      </button>
    </span>
    <div v-else>
      <poke-image :images="pokemon.sprites" />
      <poke-name :pokemonName="pokemon.name" />
      <poke-search @get-pokemon-name="fetchNewPokemon" />
      <poke-type :type="pokemon.types" />
      <poke-spec :spec="pokemon" />
      <poke-description :abilities="pokemon.abilities" />
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import PokeImage from "./PokeImage.vue";
import PokeName from "./PokeName.vue";
import PokeSearch from "./PokeSearch.vue";
import PokeDescription from "./PokeDescription.vue";
import PokeSpec from "./PokeSpec.vue";
import PokeType from "./PokeType.vue";
import { useQuery } from "@tanstack/vue-query";
import { ref } from "vue";

const selectedName = ref("pikachu");

const fetchPokemon = async (name: string) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return data;
};

const {
  isFetching,
  isError,
  error,
  data: pokemon,
  refetch,
} = useQuery({
  queryKey: ["pokemon", selectedName.value],
  queryFn: () => fetchPokemon(selectedName.value),
  enabled: true,
  retry: false,
});

const fetchNewPokemon = (name: string) => {
  selectedName.value = name;
  refetch();
};
</script>

<style scoped lang="scss">
.poke {
  border: 4px solid black;
  min-width: 300px;
  padding: 10px;
  background-color: gray;
}
.pokemon-name-button {
  border: 3px solid white;
  width: 100%;
  padding: 10px;
  font-weight: bold;
  background-color: lightgrey;
}
</style>
