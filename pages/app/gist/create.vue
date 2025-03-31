<script setup lang="ts">
import CreateNew from '@/modules/gists/screens/CreateNew/CreateNew.vue'

useHead({
  title: 'Criar gist | 💩 poop gists',
})

definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
})
</script>

<template>
  <CreateNew />
</template>
