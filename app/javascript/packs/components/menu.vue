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
  computed: {
    html: function() {
      return document.querySelector('html');
    },
    scroll_items: function() {
      return this.items.slice(0).reverse()
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
      this.active = this.active_menu_item()
    },
    active_menu_item: function() {
      const actives = this.active_scrolled_items()
      if (actives.length === 0)
        return
      return actives[0].label
    },
    active_scrolled_items: function() {
      const html = this.html
      return this.scroll_items.filter(function(item) {
        const el = document.getElementById(item.label);
        if (el === null)
          return false
        if (html.scrollTop >= el.offsetTop) {
          return true
        }
        return false
      })
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
