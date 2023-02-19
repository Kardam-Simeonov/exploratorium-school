<template>
  <div class="relative">
    <!-- About Us -->
    <section class="bg-gradient-to-b from-explo-darkpurple to-explo-lightblue pb-48 rounded-b-3xl">
      <!-- Seperator-->
      <img src="@/assets/artwork/svg/wavesdivider.svg" class="h-16 w-full mb-12">
      <div class="flex flex-col gap-8 mx-auto px-12 2xl:max-w-7xl max-w-5xl">
        <div class="col-span-full mb-8">
          <h1 class="font-lobster text-left 2xl:text-6xl text-5xl text-explo-darkgreen mb-4 drop-shadow-xl">
            {{ currentArticle.data.attributes.title }}
          </h1>
          <div class="w-10 h-2 bg-explo-darkgreen" />
        </div>
        <article class="h-full w-2/3">
          <div class="text-white leading-6" v-html="currentArticle.data.attributes.content" />
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
