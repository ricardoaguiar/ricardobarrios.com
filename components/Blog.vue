<template>
  <NuxtLayout :name="layout">
   <ContentDoc />
  </NuxtLayout>

</template>

<script setup>
const layout = 'post'

export default {
  name: "Blog",
}
</script>

<style scoped>

</style>