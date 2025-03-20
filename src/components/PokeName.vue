<template>
  <h3>{{ pokemonName && pokemonName.toUpperCase() }}</h3>
</template>

<script setup lang="ts">
defineProps({
  pokemonName: {
    type: String,
    required: true,
  },
});
</script>
