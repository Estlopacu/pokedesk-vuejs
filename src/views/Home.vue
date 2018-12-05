import Home from './views/Home.vue';
import Poke from './compomnents/Poke.vue';

<template>
  <div class="wrapper">
    <Poke></Poke>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Poke from '@/components/Poke.vue';

@Component({
  components: {
    Poke,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
