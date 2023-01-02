<template>
	<header>
		<Logo />
		<nav class="gap-2">
			<template v-for="(link, i) in links" :key="`navLink-${i}`">
				<NuxtLink>
					<span class="cursor-pointer font-medium">{{ link.name }}</span>
				</NuxtLink>
			</template>
		</nav>
	</header>
</template>

<script setup>
const links = [
	{
		name: 'Blog',
		path: '/blog'
	},
	{
		name: 'About',
		path: '/about'
	},
	{
		name: 'Contact',
		path: '/contact'
	}
];
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
