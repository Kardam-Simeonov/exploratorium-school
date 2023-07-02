<template>
  <div class="relative lg:pt-80 pt-72">
    <img
      class="xl:hidden block h-[22rem] w-full absolute top-0 left-0 object-cover object-center mask-header-mobile opacity-80"
      src="@/assets/stock/pencils.jpg">
    <header class="relative px-4">
      <img class="xl:block hidden w-[30rem] absolute 1xl:top-[17%] top-[25%] left-[80%] opacity-[0.03] -rotate-[150deg]" src="@/assets/artwork/svg/blobHouse-layer2.svg">
      <img class="xl:block hidden w-[48%] ml-auto absolute left-0 -right-1 bottom-0 object-cover object-center mask-header" src="@/assets/stock/pencils.jpg">
      <div class="min-h-[28rem] max-w-7xl mx-auto">
        <div class="xl:max-w-[38rem] max-w-[45rem] relative">
          <h1 class="font-lobster text-left 1xl:text-[5rem] text-[4.5rem] text-explo-darkgreen xl:mb-2 drop-shadow-text">
            Блог
          </h1>
          <div class="w-10 h-2 mb-16 bg-explo-darkgreen drop-shadow-text" />
          <h1 class="text-[2.5rem] mb-2 text-explo-darkgreen font-bold leading-snug">
            {{ currentArticle.data.attributes.title }}
          </h1>
          <div class="text-sm text-gray-300 mb-10">
            <span>Публикувано на {{ currentArticle.data.attributes.publishedAt.substr(0, 10) }}</span>
          </div>
        </div>
      </div>
    </header>
    <div class="max-w-[85rem] mx-auto grid grid-cols-12 gap-5">
      <section class="lg:col-span-7 col-span-full px-4 pb-4">
        <article class="prose prose-explo prose-img:max-h-80 sm:prose-img:ml-6 max-w-6xl">
          <!-- <StringMarkdown :md="currentArticle.data.attributes.content" /> -->
          <div v-html="renderedMarkdown" />
        </article>
      </section>
      <aside class="relative lg:col-span-5 col-span-full xl:pt-36 px-4">
        <div
          class="relative xl:max-w-[25rem] max-w-lg rounded-md rounded-br-3xl px-5 py-6 mx-auto lg:mr-auto lg:ml-4 bg-explo-darkpurple border-b-8 border-explo-lightblue shadow-2xl">
          <h1 class="text-explo-darkgreen text-xl font-bold mt-4 mb-6">
            Последни Публикации
          </h1>
          <article v-for="article, index in latestArticles.data" :key="index"
            class="p-3 mb-3 bg-explo-whiteblue hover:bg-opacity-20 bg-opacity-10 rounded-xl shadow-xl">
            <div class="text-gray-200 text-sm mb-2">
              <span>Публикувано на {{ article.attributes.publishedAt.substr(0, 10) }}</span>
            </div>
            <h2 class="text-lg text-explo-darkgreen mb-2">
              {{ truncate(article.attributes.title, 100, '...') }}
            </h2>
            <p class="text-white">
              {{ truncate(article.attributes.preview, 100, '...') }}
            </p>
          </article>
        </div>
      </aside>
    </div>
    <div class="mx-auto mt-14 w-56 h-2 bg-explo-lightblue rounded-2xl" />
  </div>
</template>
<script setup>
import MarkdownIt from 'markdown-it'

const markdownIt = new MarkdownIt()
const { find, findOne } = useStrapi()
const route = useRoute()

const { data: currentArticle } = await useAsyncData(
  'article',
  () => findOne('articles', route.params.slug)
)

const renderedMarkdown = computed(() => {
  return markdownIt.render(currentArticle.value.data.attributes.content)
})

const { data: latestArticles } = await useAsyncData(
  'articles',
  () => find('articles', {
    fields: ['title', 'preview', 'slug', 'publishedAt'],
    _sort: 'published_at:desc',
    _limit: 3
  })
)
</script>
