<script setup lang="ts">
import Edit from '@/modules/gists/screens/Edit/Edit.vue'

useHead({
  title: 'Editar gist | 💩 poop gists',
})

definePageMeta({
  layout: 'admin',
  middleware: 'auth',
})
</script>

<template>
  <Edit />
</template>
