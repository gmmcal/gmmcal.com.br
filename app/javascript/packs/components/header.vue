<template>
  <header>
    <div>
      <vue-menu-flags :items="flag_links" :css_class="i18n_css_class" />
    </div>
    <!--banner start-->
    <div class="banner">
      <div class="row" :style="banner_style">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padd" style="height:100%">
          <!--background slide show start-->
          <div class="banner-part">
            <img :src="this.image" :class="banner_image_class" />
          </div>
          <!--background slide show end-->
        </div>
      </div>
      <!--banner end-->
      <div class="banner-text container">
        <h1>{{ I18n.t('name', { scope: 'template' }) }}</h1>
        <h2>{{ I18n.t('title', { scope: 'template' }) }}</h2>
      </div>
    </div>
    <!--menu start-->
    <div class="menu">
      <div class="navbar-wrapper is-stuck">
        <div class="container">
          <div class="navwrapper">
            <div class="navbar navbar-inverse navbar-static-top">
              <div class="container">
                <div class="navbar-header">
                  <button v-on:click="expand_menu" type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                </div>
                <div class="navbar-collapse collapse">
                  <vue-menu-main :click="expand_menu" :items="menu_links" :css_class="main_css_class" />
                </div>
              </div>
            </div>
          </div>
          <!-- End Navbar -->
        </div>
      </div>
    </div>
    <!--menu end-->
  </header>
</template>

<script>
import Menu from './menu'
import I18n from '../i18n'

export default {
  props: ['image'],
  data: function() {
    return {
      flag_links: gon.flag_links,
      menu_links: gon.menu_links,
      bannerWidth: 0,
      bannerHeight: 0,
      windowWidth: 0,
      windowHeight: 0,
      i18n_css_class: 'i18n',
      main_css_class: 'nav navbar-nav',
      I18n: I18n,
    }
  },
  components: {
    'vue-menu-flags': Menu,
    'vue-menu-main': Menu,
  },
  computed: {
    banner_style: function() {
      return {
        width: this.bannerWidth + 'px',
        height: this.bannerHeight + 'px',
      }
    },
    banner_image_class: function() {
      if (this.windowWidth < this.windowHeight) {
        return 'banner-img bgheight'
      }
      return 'banner-img bgwidth'
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWidth)
      window.addEventListener('resize', this.getHeight)

      //Init
      this.getWidth()
      this.getHeight()
    })
  },
  methods: {
    getWidth(event) {
      this.windowWidth = document.documentElement.clientWidth
      this.bannerWidth = this.windowWidth
    },
    getHeight(event) {
      this.windowHeight = document.documentElement.clientHeight
      this.bannerHeight = this.windowHeight - 60
    },
    expand_menu(event) {
      const menu = document.querySelector('.navbar-collapse')
      menu.classList.toggle('expand')
      menu.classList.toggle('collapse')
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWidth)
    window.removeEventListener('resize', this.getHeight)
  }
}
</script>
