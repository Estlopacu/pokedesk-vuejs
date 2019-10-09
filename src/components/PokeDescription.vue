<template>
  <div class="poke-description">
    <h3>Ability</h3>
    <ul>
      <li v-for="(ability,index) in abilities" :key="index">
        {{ability.ability.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  props: ['abilities'],
})
export default class PokeDescription extends Vue {}
</script>

<style scoped lang="scss">
.poke-description {
  border: 1px solid white;
  margin-top: 10px;

  h4 {
    padding: 0;
    text-decoration: underline;
  }
  ul {
    list-style: none;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  li {
    margin: 10px 0;
  }
}
</style>
