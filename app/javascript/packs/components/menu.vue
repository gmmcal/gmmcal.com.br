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
.navbar-nav {
  margin: 0 auto;
  text-align: center;
  background: #262b37;

  > li {
    a {
      color: #c3c8d6;
      line-height: 18px;
      padding: 22px 25px;
      text-align: center;

      &:hover {
        color: #fff;
        text-decoration: none;
      }

      // @media screen and (max-width: 991px) {
      //   padding-left: 18px;
      //   padding-right: 18px;
      // }

      // @media screen and (max-width: 810px) {
      //   padding-left: 17px;
      // }

      // @media screen and (max-width: 480px) {
      //   line-height: 17px;
      //   padding-bottom: 11px;
      //   padding-top: 11px;
      // }
    }

    @media screen and (max-width: 810px) {
      width: 100%;
    }

    &.active > a,
    &.active > a:focus {
      background: #1b1f29;
      color: #c3c8d6;
    }

    &.active > a:hover {
      background: #1b1f29;
      color: #fff;
    }
  }
}

.i18n {
  height: 32px;
  position: fixed;
  right: 10px;
  top: 15px;
  width: 32px;
  z-index: 1040;

  li {
    float: right;
    list-style: none;
  }
}
</style>
