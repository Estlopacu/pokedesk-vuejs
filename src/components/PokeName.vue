<template>
  <h3>{{ pokemonName && pokemonName.toUpperCase()}}</h3>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: ['pokemonName'],
})
export default class PokeName extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
