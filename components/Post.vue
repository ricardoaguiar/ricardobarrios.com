<template>
  <section class="border border-gray-300 shadow-md">
  <h1>Blog</h1>
  <ul class="border border-gray-300 shadow-md">
    <li v-for="{ _path: slug, title } in posts" :key="slug" class="post">
      <NuxtLink :to="slug">{{ title }}</NuxtLink>
    </li>
  </ul>
  <p>{{title}}</p>
  <p>{{description}}</p>
<!--  <slot />-->
  </section>
</template>

<script lang="ts" setup>

export interface Props {
  title: string;
  description: string;
}

defineProps<Props>();

const posts = await queryContent('/blog')
    .sort({ date: -1 }) // show latest articles first
    .where({ _partial: false }) // exclude the Partial files
    .find();

</script>

<style scoped>
.post {
  border: 1px solid #ccc;
  width: 25%;
  margin: 1rem;
}
</style>