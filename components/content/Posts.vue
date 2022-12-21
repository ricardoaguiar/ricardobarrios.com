<template>
  <h1>Blog</h1>
  <ul>
    <li v-for="{ _path: slug, title } in posts" :key="slug">
      <NuxtLink :to="slug">{{ title }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Posts"
}

const posts = await queryContent('/blog')
    .sort({ date: -1 }) // show latest articles first
    .where({ _partial: false }) // exclude the Partial files
    .find();

</script>

<style scoped>

</style>