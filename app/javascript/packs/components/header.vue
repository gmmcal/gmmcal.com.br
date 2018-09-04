<template>
  <header>
    <vue-main-menu />
    <vue-menu :items="flag_links" :css_class="i18n_css_class" />
    <vue-banner />
  </header>
</template>

<script>
import Banner from './banner'
import Menu from './menu'
import MenuContainer from './menu-container'
import I18n from '../i18n'

export default {
  data() {
    return {
      flag_links: gon.flag_links,
      i18n_css_class: 'i18n',
    }
  },
  components: {
    'vue-banner': Banner,
    'vue-menu': Menu,
    'vue-main-menu': MenuContainer,
  }
}
</script>

<style lang="scss" scoped>
header {
  position: relative;
}
</style>
