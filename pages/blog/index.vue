<script setup lang='ts'>
import { convertDate } from '~/utils';

const formatter = Intl.DateTimeFormat(undefined, {
	year: 'numeric',
	month: 'short',
	day: 'numeric'
});


// const contentQuery = await queryContent('blog').only('_path', 'title').sort({ author: 0 }).find();
const { data: contentQuery } = useAsyncData(
	() => queryContent('blog').only(['_path', 'title', 'date']).find(),
	{
		transform: (data) =>
			data.map((x) => ({
				...x,
				textDate: formatter.format(new Date(x.date))
			}))
	}
);
</script>

<template>
	<main class="bg-white px-4 pt-10 pb-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-12">
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
				"
			>

				<div
					v-for="article in contentQuery"
					:key="article._path"
					class="flex flex-col justify-between border border-gray-300"
				>
					<nuxt-link :href="article._path" class="p-4">
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
				</div>
			</div>
		</div>
	</main>
</template>


<style scoped></style>