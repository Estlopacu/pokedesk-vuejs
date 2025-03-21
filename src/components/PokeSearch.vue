<template>
  <form v-on:submit.prevent="getPokemonName()" class="relative">
    <input
      type="text"
      class="w-full text-center p-2.5 bg-[#EFDCAB] border-3 border-[#D98324] border-b-0 outline-none"
      v-model="localPokemonName"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <ul class="absolute mt-1 w-full bg-[#EFDCAB]" v-if="showAutoComplete" @mousedown.prevent>
      <li
        v-for="pokemon in items"
        @click="setPokemonValueFromDropdown(pokemon.name)"
        class="py-3 border-x-2 border-b-2 border-[#D98324]"
      >
        {{ pokemon.name }}
      </li>
    </ul>
    <input
      type="submit"
      class="border-3 border-[#D98324] w-full p-2.5 font-bold bg-[#EFDCAB]"
      value="Search"
    />
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
