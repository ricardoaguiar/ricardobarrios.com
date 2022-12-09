<template>
  <div class="container">
  <Header />
    <slot />
  <Footer />
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";

export default {
  name: "default.vue",
  components: {Header,Footer}
}
</script>

<style scoped>
.container{
  margin: 0;
  background-color: #dedede
}

</style>