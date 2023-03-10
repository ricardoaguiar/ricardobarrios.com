<template>
<section>
  <h1 class="text-4xl">
    <slot />
  </h1>
  <slot name="description" />
</section>
<slot />
</template>

<script>
export default {
  name: "Card"
}
</script>

<style scoped>
h1 {
  color: #ccc
}
</style>