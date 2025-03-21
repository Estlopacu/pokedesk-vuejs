<template>
  <form v-on:submit.prevent="getPokemonName()" class="relative">
    <input
      type="text"
      class="pokemon-name"
      v-model="localPokemonName"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <ul class="absolute mt-1 w-full bg-[lightgrey]" v-if="showAutoComplete" @mousedown.prevent>
      <li
        v-for="pokemon in items"
        @click="setPokemonValueFromDropdown(pokemon.name)"
        class="py-3 border-x-2 border-b-2 border-white"
      >
        {{ pokemon.name }}
      </li>
    </ul>
    <input type="submit" class="pokemon-name-button" value="Search" />
  </form>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const items = ref([]); // Initialize items as an empty array
const showAutoComplete = ref(false);

const handleBlur = () => {
  // Delay hiding the dropdown to allow interaction
  setTimeout(() => {
    showAutoComplete.value = false;
  }, 200); // Adjust delay as needed (200ms in this case)
};

const handleFocus = () => {
  showAutoComplete.value = true; // Show the dropdown when input is focused
};

const setPokemonValueFromDropdown = (name: string) => {
  localPokemonName.value = name;
  showAutoComplete.value = false;
  getPokemonName();
};

const getPokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const { results } = await response.json();
  items.value = results;
};

const localPokemonName = ref(props.modelValue);

const emit = defineEmits(["get-pokemon-name"]);

const getPokemonName = () => {
  emit("get-pokemon-name", localPokemonName.value);
};

onMounted(() => {
  getPokemons();
});
</script>

<style scoped lang="scss">
.pokemon-name {
  width: 100%;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  background-color: lightgrey;
  border: none;
  border: 3px solid white;
  outline: none;
  border-bottom: none;
}
.pokemon-name-button {
  border: 3px solid white;
  width: 100%;
  padding: 10px;
  font-weight: bold;
  background-color: lightgrey;
}
</style>
