<script setup lang="ts">
import Panel from '@/modules/reports/screens/Panel/Panel.vue'

useHead({
  title: 'Painel | 💩 poop gists',
})

definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
})
</script>

<template>
  <Panel />
</template>
