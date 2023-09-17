<template>
  <div class="relative pt-72">
    <header class="relative sm:px-12 px-6">
      <img class="lg:block hidden 1xl:w-[30rem] w-[24rem] absolute 1xl:top-[17%] top-[45%] left-[80%] opacity-[0.03] -rotate-[150deg]" src="@/assets/artwork/svg/blobHouse-layer2.svg">
      <nuxt-img class="lg:block hidden aspect-[6/5] 1xl:w-[48%] w-[55%] ml-auto absolute left-0 -right-1 bottom-[12%] object-cover object-center mask-header" 
        width="1500px"
        src="/stock/pencils.jpg" />
      <nuxt-img class="lg:hidden block h-[23rem] w-full absolute -top-[55%] left-0 object-cover object-center mask-header-mobile opacity-80" 
        width="100vw"
        src="/stock/pencils.jpg" />
      <img class="2xl:w-[28rem] w-[23rem] absolute -left-[12rem] 2xl:top-[45%] top-[60%] opacity-[0.03]" src="@/assets/artwork/svg/blobL-layer2.svg">
      <div class="1xl:min-h-[35rem] lg:min-h-[48rem] min-h-[35rem] max-w-7xl mx-auto">
        <div class="1xl:max-w-[38rem] max-w-[30rem] relative">
          <h1 class="font-lobster text-left 1xl:text-[5rem] text-[4.5rem] leading-none text-explo-darkgreen mb-5 drop-shadow-text">
            {{ $t("blog") }}
          </h1>
          <div class="w-10 h-2 mb-16 bg-explo-darkgreen drop-shadow-text" />
          <p class="text-xl text-explo-whiteblue leading-7">
            Благодарим Ви, че посетихте страницата на нашия блог! В него ще откриете статии и мнения за образованието и нашата методика на работа.
          </p>
        </div>
      </div>
    </header>
    <div class="absolute left-0 right-0 mx-auto w-56 h-2 bg-explo-lightblue rounded-2xl" />
    <!-- Content -->
    <section class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 1xl:gap-8 gap-6 mx-auto mt-28 mb-28 px-6 lg:max-w-[75rem] md:max-w-4xl max-w-lg">
      <article
        v-if="articles && articles.data"
        v-for="article, index in articles.data"
        :key="index"
        class="relative h-full w-full rounded-md rounded-br-3xl p-3 pb-4 bg-explo-darkpurple border-b-8 border-explo-lightblue shadow-xl"
      >
        <nuxt-img class="w-full aspect-[13/9] my-2 border-8 rounded-md rotate-6 hover:rotate-0 transition-transform duration-200 object-cover object-center"
          :src="runtimeConfig.public.strapiUrl + article.attributes.banner.data.attributes.url" />
        <img class="absolute top-2 left-0 right-0 mx-auto w-10" src="@/assets/artwork/bullet.png">
        <h1 class="text-xl text-explo-darkgreen font-medium mt-8">
          {{ truncate(article.attributes.title, 100, '...') }}
        </h1>
        <div class="text-gray-200 text-xs mt-2 mb-4">
          <span>Публикувано на {{ article.attributes.publishedAt.substr(0, 10) }}</span>
        </div>
        <p class="text-white mb-6">
          {{ truncate(article.attributes.preview, 100, '...') }}
        </p>
        <NuxtLink :to="article.attributes.slug">
          <button
            class="bg-explo-darkcard text-explo-whiteblue text-md rounded-md border-b-4 border-explo-darkercard hover:border-explo-darkgreen p-2 shadow-lg"
          >
            Научете Повече
            <Icon name="fa6-solid:chevron-right" />
          </button>
        </NuxtLink>
      </article>
    </section>
  </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig()
const { find } = useStrapi()

const { data: articles } = await useAsyncData(
  'articles',
  () => find('articles', { fields: ['title', 'preview', 'slug', 'publishedAt'], populate: ['banner'] }))

console.log(articles)
</script>
