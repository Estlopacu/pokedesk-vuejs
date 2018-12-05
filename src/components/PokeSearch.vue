<template>
  <input type="text" v-model="name" v-on:change="$emit('get-fetch-data', name)">
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component({
  props: ['name'],
})
export default class PokeSearch extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
