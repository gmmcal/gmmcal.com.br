<template>
  <ul :class="css_class">
    <li :class="active_class(item)" v-for="item in items" :key="item.label">
      <vue-menu-item :item="item" />
    </li>
  </ul>
</template>

<script>
import MenuItem from './menu-item'
import { handleScroll } from '../behavior'

export default {
  props: {
    items: {
      type: Array[Object],
      required: true
    },
    css_class: {
      type: String,
      default: 'navbar-nav'
    },
    monitor_scroll: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: 'home',
    }
  },
  components: {
    'vue-menu-item': MenuItem,
  },
  methods: {
    active_class(item) {
      if (item.label === this.active) {
        return 'active'
      }
      return null
    },
    scroll() {
      this.active = handleScroll(this.items.slice())
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.monitor_scroll) {
        window.addEventListener('scroll', this.scroll)
        window.addEventListener('resize', this.scroll)
      }
    })
  },
  beforeDestroy() {
    if (this.monitor_scroll) {
      window.removeEventListener('scroll', this.scroll)
      window.removeEventListener('resize', this.scroll)
    }
  },
}
</script>

<style lang="scss" scoped>
@import "stylesheets/components/menu";
</style>
