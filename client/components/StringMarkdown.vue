<!-- <template>
  <ContentRenderer id="article-wrapper" :value="parsedMarkdown" />
</template>

<script setup>
import markdownParser from '@nuxt/content/transformers/markdown'

const props = defineProps({
  md: {
    type: String,
    default: ''
  },
  cid: {
    type: String,
    default: '<some-id>'
  }
})

const parsedMarkdown = await markdownParser.parse(props.cid, props.md)
</script> -->
