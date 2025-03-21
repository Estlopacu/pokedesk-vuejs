<template>
  <div class="border-4 border-[#D98324] mt-2">
    <h3 class="font-bold underline">Ability</h3>
    <ul class="list-none text-center m-0 p-0">
      <li class="mt-1" v-for="(ability, index) in abilities" :key="index">
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
