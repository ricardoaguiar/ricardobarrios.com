<script setup lang="ts">
defineProps({
  cta: {
    type: Array,
    default: () => ['Get started', '/get-started'],
  },
  secondary: {
    type: Array,
    default: () => ['Open on GitHub', 'https://github.com'],
  },
  snippet: {
    type: [String],
    default: () => '',
  },
  img: {
    type: [String],
    default: () => '',
  },
})

const backgroundImg = computed(() => img ? `url(${img})` : '')

const style = computed(() => ({
  backgroundImage: backgroundImg.value,
}))
</script>

<template>
  <div class="border border-2s" :style="backgroundImg">
<!--    <img  :src="img"/>-->
  </div>
</template>


<style scoped>

</style>