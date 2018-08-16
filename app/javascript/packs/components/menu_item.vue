<template>
  <a v-on:click="scroll" :class="item.css_class" :href="item.link">{{ I18n.t(item.label, { scope: 'template.menu'}) }}</a>
</template>

<script>
import I18n from '../i18n'

export default {
  props: ['item', 'click'],
  data() {
    return {
      I18n: I18n,
    }
  },
  methods: {
    scroll(event) {
      const destination = event.target.attributes['href'].value
      try {
        const el = document.querySelector(destination)
        window.scroll({
          top: el.offsetTop,
          behavior: 'smooth'
        })
        this.click()
        event.preventDefault()
      }catch(e){}
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  display: inline-block;

  @media screen and (max-width: 767px) {
    display: block;
  }
}

.flag {
  display: inline-block;
  height: 32px;
  opacity: .8;
  outline: none;
  text-indent: -10000px;
  transition: opacity .5s ease-in-out;
  width: 32px;

  &:hover {
    opacity: 1;
  }

  &.pt-br {
    background-position: -32px 0;
  }

  &.en {
    background-position: 0 -32px;
  }
}
</style>
