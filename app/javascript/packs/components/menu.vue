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
  data() {
    return {
      active: 'home'
    }
  },
  computed: {
    scroll_items() {
      return this.items.slice(0).reverse()
    }
  },
  components: {
    'vue-menu-item': MenuItem,
  },
  methods: {
    li_class(item) {
      if (item.label === this.active) {
        return 'active'
      }
      return null
    },
    scroll() {
      this.active = this.active_menu_item()
    },
    active_menu_item() {
      const actives = this.active_scrolled_items()
      if (actives.length === 0)
        return 'home'
      return actives[0].label
    },
    active_scrolled_items() {
      const scrollingElement = document.scrollingElement || document.documentElement
      return this.scroll_items.filter(function(item) {
        const el = document.getElementById(item.label)
        if (el === null)
          return false
        if (scrollingElement.scrollTop >= el.offsetTop) {
          return true
        }
        return false
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
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

<style lang="scss" scoped>
.navbar-nav {
  float: none;
  margin: 0 auto;
  text-align: center;

  > li {
    display: inline;
    float: none;

    &::after {
      content: ' ';
    }

    a {
      color: #c3c8d6;
      line-height: 18px;
      padding: 22px 25px;
      text-align: center;

      &:hover {
        color: #fff;
      }

      @media screen and (max-width: 991px) {
        padding-left: 18px;
        padding-right: 18px;
      }

      @media screen and (max-width: 810px) {
        padding-left: 17px;
      }

      @media screen and (max-width: 480px) {
        line-height: 17px;
        padding-bottom: 11px;
        padding-top: 11px;
      }
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
  height: 50px;
  position: fixed;
  right: 0;
  top: 15px;
  width: 100px;
  z-index: 100;

  @media screen and (max-width: 767px) {
    left: 0;
    right: auto;
  }

  li {
    float: right;
    list-style: none;
    margin-right: 8%;
    width: 40%;

    @media screen and (max-width: 767px) {
      float: left;
      margin-left: 8%;
      margin-right: 0;
    }
  }
}
</style>
