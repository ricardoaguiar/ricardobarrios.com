<script setup lang='ts'>


const formatter = Intl.DateTimeFormat(undefined, {
	year: 'numeric',
	month: 'short',
	day: 'numeric'
});

const { data: posts } = await useAsyncData('posts', () => queryContent('/blog').find());
</script>

<template>
	<main class="bg-white px-4 pt-10 pb-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-12">
    <p>pages/blog/index</p>
		<div class="mx-w-lg lg:mx-w-7xl mx-auto">
			<div class="mb-8 border-b border-gray-200 pb-4">
				<h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Blog</h2>
			</div>
			<div
				class="
					mt-12
					grid grid-cols-1
					gap-y-12 gap-x-6
					sm:grid-cols-2 sm:gap-x-8
					lg:grid-cols-3 lg:gap-x-6
					h-full
					border
					border-2
					p-4
				"
			>
        <ul>
          <li v-for="post in posts" :key="post._id">
            <NuxtLink :to="post._path">
              {{ post.title }}
            </NuxtLink>
          </li>
        </ul>


			</div>
		</div>
	</main>
</template>


<style scoped></style>