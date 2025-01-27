<script setup lang="ts">
const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div class="flex flex-col w-full gap-2 py-8" v-if="props.loading">
    <Skeleton width="100%" height="20rem" />
  </div>

  <slot v-else />
</template>
