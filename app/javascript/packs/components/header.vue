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
            <img :data-src="images.xlarge"
                 :data-src-small="images.small"
                 :data-src-medium="images.medium"
                 :data-src-large="images.large"
                 :class="banner_image_class"
                 alt="Banner" />
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
                  <button v-on:click="expand_menu" aria-label="Menu" type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
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
  data() {
    return {
      flag_links: gon.flag_links,
      menu_links: gon.menu_links,
      images: gon.images.banner,
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
    banner_style() {
      return {
        width: this.bannerWidth + 'px',
        height: this.bannerHeight + 'px',
      }
    },
    banner_image_class() {
      if (this.windowWidth < this.windowHeight) {
        return 'b-lazy banner-img bgheight'
      }
      return 'b-lazy banner-img bgwidth'
    }
  },
  mounted() {
    this.$nextTick(() => {
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

<style lang="scss" scoped>
header {
  position: relative;

  .banner {
    .row {
      background: #cacaca;
      margin: 60px auto 0;
      overflow: hidden;

      .no-padd {
        padding: 0;
      }
    }
  }

  .banner-text {
    left: 0;
    padding: 30px 0;
    position: absolute;
    right: 0;
    text-align: center;
    top: 35%;
    zoom: 1;

    @media screen and (max-width: 991px) {
      padding-left: 25px;
      padding-right: 25px;
    }

    @media screen and (max-width: 650px) {
      padding-bottom: 15px;
      padding-top: 15px;
      top: 20%;
    }

    h1 {
      font-size: 51px;
      font-weight: 100;
      letter-spacing: 16px;
      text-transform: uppercase;

      @media screen and (max-width: 991px) {
        font-size: 65px;
        line-height: 71px;
      }

      @media screen and (max-width: 650px) {
        font-size: 42px;
        line-height: 40px;
      }
    }

    h2 {
      font-size: 17px;
      letter-spacing: 8px;
      line-height: 45px;
      text-transform: uppercase;

      @media screen and (max-width: 991px) {
        font-size: 28px;
      }

      @media screen and (max-width: 650px) {
        font-size: 15px;
        line-height: 24px;
        padding-top: 10px;
      }
    }
  }

  .bgwidth {
    width: 100%;

    @media screen and (max-width: 1024px) {
      height: 100%;
      width: auto;
    }
  }

  .bgheight {
    height: 100%;
  }

  .navbar-wrapper {
    min-height: 62px;
  }

  .banner-part {
    background: #1b1f2b;
    height: 100%;
    overflow: hidden;

    img {
      filter: alpha(opacity = 20); // For IE8 and earlier
      opacity: .2;
    }
  }

  .menu {
    left: 0;
    margin-top: 0;
    position: static;
    right: 0;

    .navbar-wrapper {
      //Special class on .container surrounding .navbar, used for positioning it into place.
      background: #262b37;
      margin-top: 0;
      position: relative;
      z-index: 15;

      &.is-stuck {
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
      }

      .container {
        padding: 0;

        .navwrapper .container {
          padding: 0;
          width: auto;
        }

        .navbar-header {
          display: none;

          @media screen and (max-width: 767px) {
            display: block;
          }
        }
      }

      .navbar-inverse {
        &.navbar-static-top {
          background: #262b37;
          border: 0;
          color: #c3c8d6;
          font-family: 'Open Sans', sans-serif;
          font-size: 14px;
          margin: 0 auto;
          text-transform: uppercase;
        }
      }
    }

    .navbar-toggle {
      margin-top: 14px;
    }

    .navbar-collapse {
      padding: 0;

      &.in {
        max-height: 100%;
      }
    }
  }
}


</style>
