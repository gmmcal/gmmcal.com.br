<template>
  <div v-html="compiledMarkdown"><slot></slot></div>
</template>

<script>
import marked from 'marked'

export default {
  data() {
    return {
      content: '',
    }
  },
  computed: {
    compiledMarkdown () {
      if (this.$slots.default) {
        for (let slot of this.$slots.default) {
          this.content += marked(slot.text, { sanitize: true })
        }
      }
      return this.content
    }
  }
}
</script>
