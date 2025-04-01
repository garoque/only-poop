<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center bg-[#0ea5e9]">
    <h1 class="font-bold text-6xl text-white text-center">{{ props.title }}</h1>
    <p class="text-white text-4xl text-center">{{ props.description }}</p>
  </div>
</template>
