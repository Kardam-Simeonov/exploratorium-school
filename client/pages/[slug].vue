<template>
  <div class="relative sm:pt-48 pt-64">
    <nuxt-img width="100vw"
      class="xl:hidden block h-[22rem] w-full absolute top-0 left-0 object-cover object-center mask-fadeoff opacity-80"
      preload
      src="/stock/pencils.jpg" />
    <header class="relative lg:pl-12 px-4">
      <img class="xl:block hidden w-[30rem] absolute 1xl:top-[17%] top-[25%] left-[80%] opacity-[0.03] -rotate-[150deg]"
        src="@/assets/artwork/svg/blobHouse-layer2.svg">
      <nuxt-img width="1000px"
        class="xl:block hidden w-[40%] ml-auto absolute 2xl:right-6 right-0 -bottom-24 object-cover object-center mask-header"
        preload
        src="/stock/pencils.jpg" />
      <img class="hidden 2xl:block w-[23rem] absolute -left-[12rem] top-[45%] opacity-[0.03]"
        src="@/assets/artwork/svg/blobL-layer2.svg">
      <div class="xl:min-h-[25rem] min-h-[15rem] mb-12 max-w-[82rem] mx-auto flex flex-col justify-center">
        <div class="max-w-[43rem] sm:px-6 py-12 rounded-3xl sm:bg-explo-lightblue sm:bg-opacity-20 animate-fade-down drop-shadow-text"> 
          <h1 class="1xl:text-[2.5rem] sm:text-4xl text-4xl mb-6 text-explo-darkgreen font-medium 1xl:leading-tight sm:leading-tight leading-tight">
            {{ currentArticle.data.attributes.title }}
          </h1>
          <div class="text-sm text-gray-300">
            <span>Публикувано на {{ currentArticle.data.attributes.publishedAt.substr(0, 10) }}</span>
          </div>
        </div>
      </div>
    </header>
    <div class="max-w-[85rem] mx-auto grid grid-cols-12 gap-5">
      <section class="lg:col-span-7 col-span-full lg:pl-12 px-4 pb-8">
        <article class="prose prose-explo prose-img:max-h-80 sm:prose-img:ml-6 max-w-6xl">
          <!-- <StringMarkdown :md="currentArticle.data.attributes.content" /> -->
          <div v-html="renderedMarkdown" />
        </article>
      </section>
      <aside class="relative lg:col-span-5 col-span-full xl:pt-36 px-4">
        <div
          class="relative xl:max-w-[25rem] max-w-lg rounded-md rounded-br-3xl px-5 py-6 mx-auto lg:mr-auto lg:ml-4 bg-explo-darkpurple border-b-8 border-explo-lightblue shadow-2xl">
          <h1 class="text-explo-darkgreen text-xl font-medium mt-4 mb-6">
            Последни Публикации
          </h1>
          <article v-for="article, index in latestArticles.data" :key="index"
            class="p-3 mb-3 bg-explo-whiteblue hover:bg-opacity-20 bg-opacity-10 rounded-xl shadow-xl cursor-pointer">
            <NuxtLink :to="article.attributes.slug">
              <div class="text-gray-200 text-sm mb-2">
                <span>Публикувано на {{ article.attributes.publishedAt.substr(0, 10) }}</span>
              </div>
              <h2 class="text-lg text-explo-darkgreen mb-2">
                {{ truncate(article.attributes.title, 100, '...') }}
              </h2>
              <p class="text-white">
                {{ truncate(article.attributes.preview, 100, '...') }}
              </p>
            </NuxtLink>
          </article>
        </div>
      </aside>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'

const markdownIt = new MarkdownIt()
const { find, findOne } = useStrapi()
const route = useRoute()

const latestArticles = ref([])
const currentArticle = ref(null)
const notFound = ref(false)

onMounted(async () => {
  try {
    // Fetch latest articles
    const resLatest = await find('articles', {
      fields: ['title', 'preview', 'slug', 'publishedAt'],
      sort: ['publishedAt:desc'], // 👈 Strapi v4 syntax
      pagination: { limit: 3 }     // 👈 Strapi v4 syntax
    })
    latestArticles.value = resLatest?.data || []

    // Fetch current article by slug
    const resCurrent = await findOne('articles', route.params.slug)
    if (!resCurrent?.data) {
      notFound.value = true
      return
    }
    currentArticle.value = resCurrent
  } catch (err) {
    console.error('Fetch error:', err)
    notFound.value = true
  }
})

// Markdown rendering
const renderedMarkdown = computed(() => {
  return currentArticle.value?.data?.attributes?.content
    ? markdownIt.render(currentArticle.value.data.attributes.content)
    : ''
})
</script>
