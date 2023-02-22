<template>
  <div class="relative">
    <!-- About Us -->
    <section class="bg-[#6c6aaf] pb-48 rounded-b-3xl">
      <div class="flex flex-col gap-8 mx-auto px-12 2xl:max-w-7xl max-w-5xl">
        <div class="col-span-full mb-8">
          <h1 class="font-lobster text-left 2xl:text-6xl text-5xl text-explo-darkgreen mb-4 drop-shadow-xl">
            {{ currentArticle.data.attributes.title }}
          </h1>
          <div class="w-10 h-2 bg-explo-darkgreen" />
        </div>
        <article
          class="prose prose-explo"
        >
          <StringMarkdown :md="currentArticle.data.attributes.content" />
        </article>
      </div>
    </section>
  </div>
</template>
<script setup>
const { findOne } = useStrapi()
const route = useRoute()

const { data: currentArticle } = await useAsyncData(
  'article',
  () => findOne('articles', route.params.slug))
</script>
