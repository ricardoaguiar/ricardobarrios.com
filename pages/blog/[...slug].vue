<template>
  <Header />
  <div class="container bg-white mx-auto m-16 p-10">
    <ContentDoc />
    <NuxtImg provider="cloudinary" src="https://res.cloudinary.com/ricardoaguiar/image/upload/v1625499913/blog/therock.jpg" width="300" height="200" />

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