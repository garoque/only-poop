<script setup lang="ts">
const colorMode = useColorMode()
colorMode.preference = 'light'

useHead({
  title: '💩 poop gists',
})

useSeoMeta({
  title: '💩 poop gists - Compartilhe e monetize trechos de código.',
  ogTitle: '💩 poop gists - Compartilhe e monetize trechos de código.',
  ogDescription:
    'Compartilhe e monetize trechos de código. Ganhe uma renda extra com os códigos que você faz no dia a dia.',
})
</script>

<template>
  <NuxtLayout>
    <Toast />
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
