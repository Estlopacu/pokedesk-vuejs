<template>
  <div class="border-4 border-[#D98324] mt-2">
    <h3 class="font-bold underline">Complexion</h3>
    <p class="list-none text-center m-0 p-0">
      Weight
      {{ spec.weight }}
    </p>
    <p>
      Height
      {{ spec.height }}''
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  spec: {
    weight: number;
    height: number;
  };
}>();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.poke-spec {
  border: 1px solid white;
  margin-top: 10px;
}
</style>
