<template>
  <section class="relative pt-[28rem]">
    <div class="absolute z-0 top-0 left-0 right-0 bottom-0 bg-[url('@/assets/stock/SVS_blogbanner.jpg')] h-[30rem]" />
    <div class="relative z-10 bg-gradient-to-b from-explo-darkpurple to-[#7674b3] pb-48 pt-20 rounded-3xl border-t-16 border-explo-lightblue">
      <div class="flex flex-col gap-8 mx-auto px-12 2xl:max-w-7xl max-w-5xl">
        <div class="mb-8">
          <h1 class="font-lobster text-left 2xl:text-6xl text-5xl text-explo-darkgreen mb-4 drop-shadow-xl">
            Блог
          </h1>
          <div class="w-10 h-2 bg-explo-darkgreen" />
        </div>
        <article
          class="prose prose-explo prose-img:max-h-80 prose-img:ml-6 max-w-3xl"
        >
          <h1 class="text-[2.5rem] mb-12">
            {{ currentArticle.data.attributes.title }}
          </h1>
          <StringMarkdown :md="currentArticle.data.attributes.content" />
        </article>
      </div>
    </div>
  </section>
</template>
<script setup>
const { findOne } = useStrapi()
const route = useRoute()

const { data: currentArticle } = await useAsyncData(
  'article',
  () => findOne('articles', route.params.slug))
</script>
