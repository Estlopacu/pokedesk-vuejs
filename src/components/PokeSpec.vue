<template>
  <div class="poke-spec">
    <h3>Complexion</h3>
    <p>
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
