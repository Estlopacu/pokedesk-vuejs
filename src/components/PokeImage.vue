<template>
  <img :src="getImageUrl" />
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";

const props = defineProps({
  images: {
    type: Object as PropType<{ [key: string]: string }>,
    required: true,
  },
});

const getImageUrl = computed(() => {
  const randomImage: any = ["front_default", "front_shiny"];
  const index: any = Math.floor(Math.random() * 2 + 0);
  return props.images && props.images[randomImage[index]];
});
</script>

<style scoped lang="scss">
img {
  width: 140px;
  background: white;
  border-radius: 50%;
  border: 3px solid;
}
</style>
