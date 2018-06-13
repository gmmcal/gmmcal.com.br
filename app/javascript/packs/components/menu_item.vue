<template>
  <a :class="item.css_class" :href="item.link">{{ I18n.t(item.label, { scope: 'template.menu'}) }}</a>
</template>

<script>
import I18n from '../i18n'

export default {
  props: ['item'],
  data: function() {
    return {
      I18n: I18n,
    }
  }
}
</script>
