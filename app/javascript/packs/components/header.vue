<template>
  <header>
    <div class="menu fixed-top">
      <vue-main-menu />
      <vue-menu :items="flag_links" :css_class="i18n_css_class" />
    </div>
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

  .menu {
    background: #262b37;
    min-height: 62px;
  }
}
</style>
