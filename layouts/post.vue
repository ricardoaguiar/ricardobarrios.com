<script setup lang="ts">
  const { next } = useContent();
</script>

<template>
  <div class="container">
    <Header />
    <div class="bg-gray-800 w-8/12 m-auto">
      <slot />
    </div>
    <div v-if="next" class="flex justify-center flex-row">
      <div>Next Post</div>
      <NuxtLink :to="next.path">
        {{ next.title }}
      </NuxtLink>
      <p class="text-sm">{{ next.description }}</p>
    </div>
    <Footer />
  </div>
</template>


<style scoped>

</style>