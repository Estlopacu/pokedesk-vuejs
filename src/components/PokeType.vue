<template>
  <div class="poke-type">
    <h3>Type</h3>
    <p>{{ type && type[0].type.name }}</p>
  </div>
</template>
<script lang="ts">
export default {
  name: "PokeType",
  props: {
    type: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.poke-type {
  border: 1px solid white;
  margin-top: 10px;
}
</style>
