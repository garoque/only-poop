<script setup lang="ts">
const props = defineProps<{
  avatarUrl: string
  author: string
  bio: string
}>()
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center bg-[#0ea5e9]">
    <img :src="props.avatarUrl" alt="avatar url" width="170" height="170" class="rounded-full" />
    <h1 class="font-bold text-6xl text-white text-center">{{ props.author }}</h1>
    <p class="text-white text-4xl text-center">{{ props.bio }}</p>
  </div>
</template>
