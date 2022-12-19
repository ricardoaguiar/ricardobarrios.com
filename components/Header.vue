<template>
  <header>
    <NuxtLink to="/">
      <h1>Ricardo Aguiar</h1>
    </NuxtLink>
    <nav>
<!--      <template v-for="(n, i) in links" :key="`navLink-${i}`">-->
        <NuxtLink
            to="/about"
        >
          <div>
            <span>About</span>
          </div>

        </NuxtLink>
<!--      </template>-->
    </nav>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  top: 0;
  position: sticky;
  margin: 0;
  padding: 1rem;
  width: 100%;
  background-color: rgba(211, 211, 211, 0.99);
}
nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>