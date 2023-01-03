<script lang="ts" setup>
import { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';

const query: QueryBuilderParams = {
	path: '/blog',
	limit: 5
};
</script>

<template>
  <div>
		<div class="border-b grid">
			<div class="container mx-auto m-16 p-10 flex flex-col">
				<h1 class="text-3xl text-gray-700 pb-2">Hi, I'm Ricardo Aguiar</h1>
				<p class="text-left text-lg text-black font-light pb-8">
					Welcome to my blog! I am passionate about learning and growing, and writing is a powerful
					way to process and reflect on the world around us. I have lived abroad for over three
					decades, which has been a life-changing experience. It has pushed me out of my comfort
					zone, helped me to become more open-minded, and taught me so much about myself and the
					world around me. I hope that sharing my experiences will inspire you to explore your
					untapped potential and propel you to evolve into the best version of yourself.
				</p>
				<nuxt-link
					class="border-1 mx-auto rounded border bg-gray-800 px-4 py-2 text-white justify-center"
					to="/blog"
				>
					View Blog
				</nuxt-link>
			</div>
    </div>
		<ContentList v-slot="{ list }" :query="query">
			<ul class="grid grid-cols-2 align-items-center">
				<li v-for="article in list" :key="article._path" class="p-8 border-b border-r h-96">
					<nuxt-link :to="article._path" class="p-4">
						<h3 class="text-lg font-medium text-gray-900">
							{{ article.title }}
						</h3>
						<p class="mt-3 text-gray-700">{{ article.description }}</p>
					</nuxt-link>
					<div class="mt-6 p-4">
						<a :href="`?author=${article.author}`" class="pr-4 text-sm text-gray-700">
							{{ article.author }}
						</a>
						<time class="text-sm text-gray-700" datetime="2023-01-01T00:00">
							{{ convertDate(article.date) }}
						</time>
					</div>
				</li>
			</ul>
		</ContentList>
  </div>
</template>

<style scoped></style>