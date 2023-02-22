<template>
  <ContentRenderer :value="parsedMarkdown" id="article-wrapper" />
</template>

<script>
import markdownParser from '@nuxt/content/transformers/markdown'

export default defineComponent({
  props: {
    md: {
      type: String,
      default: ''
    },
    cid: {
      type: String,
      default: '<some-id>'
    }
  },
  async setup (props) {
    return {
      parsedMarkdown: await markdownParser.parse(props.cid, props.md)
    }
  }
})
</script>
