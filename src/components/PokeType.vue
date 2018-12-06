<template>
  <div class="poke-type">
    <h3>Type</h3>
    <p>{{type && type[0].type.name}}</p>
  </div>
</template>
<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: ['type'],
})
export default class PokeType extends Vue {}
</script>

<style lang="scss" scoped>
.poke-type {
  border: 1px solid white;
  margin-top: 10px;
}
</style>
