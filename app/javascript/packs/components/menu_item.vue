<template>
  <a v-on:click="scroll" :class="item.css_class" :href="item.link">{{ I18n.t(item.label, { scope: 'template.menu'}) }}</a>
</template>

<script>
import I18n from '../i18n'

export default {
  props: ['item', 'click'],
  data: function() {
    return {
      I18n: I18n,
    }
  },
  methods: {
    scroll: function(event) {
      const destination = event.target.attributes['href'].value
      try {
        const el = document.querySelector(destination)
        window.scroll({
          top: el.offsetTop,
          behavior: 'smooth'
        });
        this.click()
        event.preventDefault()
      }catch(e){}
    },
  },
}
</script>
