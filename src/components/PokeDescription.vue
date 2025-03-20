<template>
  <div class="poke-description">
    <h3>Ability</h3>
    <ul>
      <li v-for="(ability, index) in abilities" :key="index">
        {{ ability.ability.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  abilities: Array<{ ability: { name: string } }>;
}>();
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
