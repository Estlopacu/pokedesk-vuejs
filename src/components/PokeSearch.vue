<template>
  <form v-on:submit.prevent="getPokemonName()">
    <input type="text" class="pokemon-name" @blur="getPokemonName()" v-model="pokemonName">
    <input type="submit" class="pokemon-name-button" value="Search">
  </form>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

declare module 'vue/types/vue' {
  interface Vue {
    pokemonName: string;
  }
}

@Component({
  data() {
    return {
      pokemonName: '',
    };
  },
  methods: {
    getPokemonName() {
      this.$parent.fetchData(this.pokemonName);
    },
  },
})
export default class PokeSearch extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pokemon-name {
  width: 100%;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  background-color: lightgrey;
  border: none;
  border: 3px solid white;
  outline: none;
  border-bottom: none;
}
.pokemon-name-button {
  border: 3px solid white;
  width: 100%;
  padding: 10px;
  font-weight: bold;
  background-color: lightgrey;
}
</style>
