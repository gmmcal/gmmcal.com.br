<template>
  <div class="navbar navbar-expand-md navbar-dark">
    <button v-on:click="click" aria-label="Menu" type="button" class="navbar-toggler">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="menu-container collapse navbar-collapse">
      <vue-menu :items="links" :monitor_scroll="true" />
    </div>
  </div>
</template>

<script>
import Menu from './menu'
import { handleMenu } from '../behavior'

export default {
  data() {
    return {
      links: gon.menu_links,
      click: handleMenu,
    }
  },
  components: {
    'vue-menu': Menu,
  },
}
</script>

<style lang="scss" scoped>
@import "stylesheets/components/menu-container";
</style>
