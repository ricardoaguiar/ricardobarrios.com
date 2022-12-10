<template>
  <div class="container">
  <Header />
    <slot />
  <Footer />
  </div>
</template>

<script>
export default {
  name: "default.vue",
}
</script>

<style scoped>
.container{
  margin: 0;
  padding: 0;
  height: 80vh;
  width: 100%;
  background-color: #dedede
}

</style>