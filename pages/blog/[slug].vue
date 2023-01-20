<script setup lang="ts">
const layout = 'post';
const route = useRoute();

const { data } = await useAsyncData(`content-${route.path}`,
  () => queryContent().where({ _path: route.path }).findOne()
);
</script>



<template>
<!--  <div class="container bg-white mx-auto m-16 p-10 w-full">-->
  <main>
    <ContentRenderer :value="data"/>
  </main>
<!--  </div>-->
</template>


<style scoped>

</style>