<template>
  <h1 :id="id" class="h1-component font-extrabold">
    <ContentSlot :use="$slots.blog" unwrap="p" />
    <a v-if="generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports'
defineProps<{ id: string }>()
const heading = 1
const { anchorLinks } = useRuntimeConfig().public.content
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>

<style scoped>

</style>