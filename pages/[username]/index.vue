<script setup lang="ts">
import PublicProfile from '@/modules/users/screens/PublicProfile/PublicProfile.vue'

useHead({
  title: 'Perfil público | 💩 poop gists',
})

definePageMeta({
  layout: 'checkout',
})
</script>

<template>
  <PublicProfile />
</template>
