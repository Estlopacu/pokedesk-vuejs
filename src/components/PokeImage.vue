<template>
  <div class="flex justify-center items-center my-2">
    <img
      class="animate-bounce-once border-4 border-[#D98324] rounded-full w-[160px]"
      :src="getImageUrl"
    />
  </div>
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
@keyframes bounce-once {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-20px);
  }
}

.animate-bounce-once {
  animation: bounce-once 1s ease-out 1;
}
</style>
