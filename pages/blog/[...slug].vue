<template>
  <Header />
  <div class="container bg-white mx-auto m-16 p-10">
    <ContentDoc />
    <NuxtImg provider="cloudinary" src="https://res.cloudinary.com/ricardoaguiar/image/upload/v1653078865/20100202.Caribean.Cruise.0624_vzhafb.jpg" width="300" height="200" />

  </div>
  <Footer />
</template>

<script>
export default {
  name: "[...slug].vue"
}
</script>

<style scoped>

</style>