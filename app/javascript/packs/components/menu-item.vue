<template>
  <a v-on:click="click" data-turbolinks="false" :class="item.css_class" :href="item.link" :alt="item.label">{{ I18n.t(item.label, { scope: 'frontend.template.menu'}) }}</a>
</template>

<script>
import I18n from '../i18n'
import { handleClick } from '../behavior'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      I18n: I18n,
      click: handleClick,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "stylesheets/components/menu-item";
</style>
