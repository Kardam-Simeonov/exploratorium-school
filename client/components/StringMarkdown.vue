<template>
  <ContentRenderer :value="parsedMarkdown" id="article-wrapper" />
</template>

<script>
import { defineComponent } from 'vue'

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

<style>
#article-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
#article-wrapper ul {
   list-style-type: disc;
   list-style-position: inside;
}
#article-wrapper ol {
   list-style-type: decimal;
   list-style-position: inside;
}
#article-wrapper ul ul, ol ul {
   list-style-type: circle;
   list-style-position: inside;
   margin-left: 15px;
}
#article-wrapper ol ol, ul ol {
   list-style-type: lower-latin;
   list-style-position: inside;
   margin-left: 15px;
}
</style>
