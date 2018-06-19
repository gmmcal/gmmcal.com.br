<template>
  <ul :class="css_class">
    <li :class="li_class(item)" v-for="item in items" :key="item.label">
      <vue-menu-item :click="click" :item="item" />
    </li>
  </ul>
</template>

<script>
import MenuItem from './menu_item'

export default {
  props: ['items', 'css_class', 'click'],
  data: function() {
    return {
      active: 'home'
    }
  },
  components: {
    'vue-menu-item': MenuItem,
  },
  methods: {
    li_class: function(item) {
      if (item.label === this.active) {
        return 'active'
      }
      return null
    },
    scroll: function() {
      // TODO: improve this method
      const html = document.querySelector('html');
      const items = this.items.slice(0).reverse()
      const actives = items.filter(function(item) {
        const el = document.getElementById(item.label);
        if (el === null)
          return false
        if (html.scrollTop >= el.offsetTop) {
          return true
        }
        return false
      })
      if (actives.length === 0)
        return
      this.active = actives[0].label
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('scroll', this.scroll)
      window.addEventListener('resize', this.scroll)
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scroll)
    window.removeEventListener('resize', this.scroll)
  }
}
</script>
