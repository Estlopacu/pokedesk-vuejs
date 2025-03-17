<template>
  <div class="wrapper">
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

<style lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
