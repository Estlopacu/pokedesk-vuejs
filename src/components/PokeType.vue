<template>
  <div class="poke-type">
    <h3>Type</h3>
    <p>{{ type && type[0].type.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  type: {
    type: Array<{ type: { name: string } }>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.poke-type {
  border: 1px solid white;
  margin-top: 10px;
}
</style>
