<template>
  <header>
    <Logo />
    <nav>
    <ContentNavigation v-slot="{ navigation }" >
      <ul class="flex-row flex gap-2">
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">
            <span class="cursor-pointer font-medium text-white">{{ link.title }}</span>
          </NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
    </nav>
  </header>
</template>


<style scoped>
header {
	display: grid;
	grid-template-columns: 1fr 1fr;
	top: 0;
	position: sticky;
	margin: 0;
	padding: 1rem;
	width: 100%;
  background-color: dimgray;
}


</style>
