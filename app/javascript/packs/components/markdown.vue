<template>
  <div v-html="markdown"><slot></slot></div>
</template>

<script>
import marked from 'marked'

export default {
  computed: {
    markdown() {
      let text = ''
      if (this.$slots.default) {
        for (let slot of this.$slots.default) {
          text += this.content(slot)
        }
      }
      return text
    }
  },
  methods: {
    content(slot) {
      if (slot.text === undefined) {
        let text = ''
        for (let child of slot.children) {
          text += marked(child.text, { sanitize: true })
        }
        return text
      }
      return marked(slot.text, { sanitize: true })
    }
  }
}
</script>
