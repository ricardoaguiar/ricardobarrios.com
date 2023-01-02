<template>
  <div class="container bg-white mx-auto m-16 p-10 w-full">
    <ContentDoc />
    <NuxtImg provider="cloudinary" src="https://res.cloudinary.com/ricardoaguiar/image/upload/v1625499913/blog/therock.jpg" width="300" height="200" />
  </div>
</template>

<script>
export default {
  name: "[...slug].vue"
}
</script>

<style scoped>

</style>