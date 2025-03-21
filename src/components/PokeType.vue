<template>
  <div class="border-4 border-[#D98324] mt-2">
    <h3 class="font-bold underline">Type</h3>
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
