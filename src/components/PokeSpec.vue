<template>
  <div class="poke-spec">
    <h3>Complexion</h3>
    <p>
      Weight
      {{spec.weight}}
    </p>
    <p>
      Height
      {{spec.height}}''
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: ['spec'],
})
export default class PokeSpec extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.poke-spec {
  border: 1px solid white;
  margin-top: 10px;
}
</style>
