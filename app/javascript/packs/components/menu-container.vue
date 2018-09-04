<template>
  <div class="menu fixed-top">
    <div class="navbar navbar-expand-md navbar-dark">
      <button v-on:click="expand_menu" aria-label="Menu" type="button" class="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <vue-menu :click="expand_menu" :items="links" :css_class="css_class" />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './menu'

export default {
  data() {
    return {
      links: gon.menu_links,
      css_class: 'navbar-nav',
    }
  },
  components: {
    'vue-menu': Menu,
  },
  methods: {
    expand_menu(event) {
      const menu = document.querySelector('.navbar-collapse')
      menu.classList.toggle('show')
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  min-height: 62px;
  background: #262b37;

  .navbar {
    border: 0;
    color: #c3c8d6;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    margin: 0 auto;
    padding: 0;
    text-transform: uppercase;

    @media screen and (max-width: 767px) {
      padding: 1rem 0 0;
    }

    .navbar-toggler {
      margin: 0 0 10px 10px;

      .navbar-toggler-icon {
        height: 1em;
        width: 1em;
      }
    }
  }
}
</style>
