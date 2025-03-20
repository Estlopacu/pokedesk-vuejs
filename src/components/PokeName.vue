<template>
  <h3 class="my-2 font-bold">{{ pokemonName && pokemonName.toUpperCase() }}</h3>
</template>

<script setup lang="ts">
defineProps({
  pokemonName: {
    type: String,
    required: true,
  },
});
</script>
