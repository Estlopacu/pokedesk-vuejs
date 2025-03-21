<template>
  <div class="flex justify-center items-center">
    <Poke />
  </div>
</template>

<script lang="ts">
import Poke from "@/components/Poke.vue";
export default {
  name: "Home",
  components: {
    Poke,
  },
};
</script>
