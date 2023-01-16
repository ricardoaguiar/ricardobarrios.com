<script setup lang="ts">
import{ computed } from 'vue';

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

let img = computed(() => props.img);
const backgroundImg = computed(() => img ? `url(${img})` : '')

const style = computed(() => ({
  backgroundImage: backgroundImg.value,
}))
</script>

<template>
  <div class="border border-2s" :style="backgroundImg">
    <img alt="backgroundImg"  :src="backgroundImg"/>
  </div>
</template>


<style scoped>

</style>