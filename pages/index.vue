<template>
	<Header />
	<main class="grid place-content-center container mx-auto gap-3 m-16 p-10">
		<h1 class="text-3xl text-gray-700">Hi, I'm Ricardo Aguiar</h1>
		<p class="text-left text-lg text-black font-light">
			Welcome to my blog! I am passionate about learning and growing, and writing is a powerful way
			to process and reflect on the world around us. I have lived abroad for over three decades,
			which has been a life-changing experience. It has pushed me out of my comfort zone, helped me
			to become more open-minded, and taught me so much about myself and the world around me. I hope
			that sharing my experiences will inspire you to explore your untapped potential and propel you
			to evolve into the best version of yourself.
		</p>
		<nuxt-link class="border-1 mx-auto rounded border bg-gray-800 px-4 py-2 text-white" to="/blog">
			View Blog
		</nuxt-link>
	</main>
	<Footer />
</template>

<script>
export default {
	name: 'index'
};
</script>

<style scoped></style>
