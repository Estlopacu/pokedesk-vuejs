<template>
  <h3>{{ pokemonName && pokemonName.toUpperCase() }}</h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "PokeName",
  props: {
    pokemonName: {
      type: String,
      required: true
    }
  }
});
</script>
