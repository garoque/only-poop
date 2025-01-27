<script setup lang="ts">
const props = defineProps<{
  value: number
  label: string
}>()
</script>

<template>
  <div class="flex flex-1 flex-col bg-white p-5 rounded-xl">
    <span class="text-4xl text-sky-500 font-bold">{{ props.value }}</span>
    <p class="text-lg text-gray-700">{{ props.label }}</p>
  </div>
</template>
