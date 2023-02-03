<template>
  <main class="relative">
    <!-- About Us -->
    <section class="bg-gradient-to-b from-explo-darkpurple to-explo-lightblue pb-48 rounded-b-3xl">
      <!-- Seperator-->
      <img src="@/assets/artwork/svg/wavesdivider.svg" class="h-16 w-full mb-12">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-auto px-12 2xl:max-w-7xl max-w-5xl">
        <div class="col-span-full mb-8">
          <h1 class="font-lobster text-left 2xl:text-6xl text-5xl text-explo-darkgreen md:mb-2 mb-4 drop-shadow-xl">
            {{ article.title }}
          </h1>
          <div class="w-10 h-2 bg-explo-darkgreen" />
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: 'ArticlePage',
  data () {
    return {
      article: {}
    }
  },
  mounted () {
    this.getArticle()
  },
  methods: {
    async getArticle () {
      const result = await this.$axios.$get('http://localhost:1337/api/articles?filters[slug][$eq]=' + this.$route.params.slug + '&fields=title,content')
      this.article = result.data[0].attributes
    },
    truncate (text, length, suffix) {
      if (text.length > length) {
        const trimmedString = text.substring(0, length)
        return trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))) + suffix
      } else {
        return text
      }
    }
  }
}
</script>
