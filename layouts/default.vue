<template>
  <main class="container">
    <Header />
      <slot />
    <Footer />
  </main>
</template>

<style scoped>
.container {
  outline: 1px solid red;
}

</style>