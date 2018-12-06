<template>
  <input type="text" v-model="pokemonName">
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component({
  data() {
    return {
      pokemonName: '',
    };
  },
  watch: {
    pokemonName() {
      this.$parent.fetchData(this.pokemonName);
    },
  },
})
export default class PokeSearch extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input {
  width: 100%;
  text-align: center;
  padding: 5px;
  box-sizing: border-box;
  background-color: tomato;
  border-top: none;
  border-left: none;
  outline: none;
}
</style>
