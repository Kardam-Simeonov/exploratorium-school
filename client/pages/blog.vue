<template>
  <div class="relative">
    <!-- Blog -->
    <section class="bg-gradient-to-b from-explo-darkpurple to-explo-lightblue pb-48 rounded-b-3xl">
      <!-- Seperator-->
      <img src="@/assets/artwork/svg/wavesdivider.svg" class="h-36 w-full mb-12">
      <!-- Content -->
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-auto px-12 2xl:max-w-7xl max-w-5xl">
        <div class="col-span-full mb-8">
          <h1 class="font-lobster text-left 2xl:text-6xl text-5xl text-explo-darkgreen md:mb-2 mb-4 drop-shadow-xl">
            Блог
          </h1>
          <div class="w-10 h-2 bg-explo-darkgreen" />
        </div>
        <article v-for="article, index in articles.data" :key="index" class="h-full w-full rounded-md rounded-br-3xl p-2 pb-3 bg-explo-darkpurple border-b-8 border-explo-lightblue shadow-md">
          <!-- <div class="text-white font-bold bg-gradient-to-r from-explo-background to-explo-lightblue rounded-md py-1 px-2">
              ⠀
            </div> -->
          <div class="h-56 my-2 overflow-hidden">
            <img :src="`http://localhost:1337${article.attributes.image.data.attributes.url}`" class="w-full object-cover rounded-md">
          </div>
          <h2 class="text-xl text-explo-darkgreen font-bold mt-8 mb-4">
            {{ truncate(article.attributes.title, 100, '...') }}
          </h2>
          <p class="text-white">
            {{ truncate(article.attributes.content, 150, '...') }}
          </p>
          <NuxtLink :to="article.attributes.slug">
            <button class="bg-explo-darkcard text-explo-whiteblue text-md rounded-md border-b-4 border-explo-darkercard hover:border-explo-darkgreen mt-4 p-2 shadow-lg">
              Научете Повече <Icon name="fa6-solid:chevron-right" />
            </button>
          </NuxtLink>
        </article>
      </div>
    </section>
  </div>
</template>
<script setup>
// articles?fields=title%2C%20content%2C%20slug&populate=image
const { find } = useStrapi()
const { data: articles } = await useAsyncData(
  'articles',
  () => find('articles', { fields: ['title', 'content', 'slug'], populate: ['image'] }))
</script>
