<template>
  <form v-on:submit.prevent="getPokemonName()">
    <input type="text" class="pokemon-name" v-model="localPokemonName" />
    <input type="submit" class="pokemon-name-button" value="Search" />
  </form>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const localPokemonName = ref(props.modelValue);

const emit = defineEmits(["get-pokemon-name"]);

const getPokemonName = () => {
  emit("get-pokemon-name", localPokemonName.value);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
