<template>
  <div class="banner">
    <div class="row" :style="banner_style">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padd" style="height:100%">
        <!--background slide show start-->
        <div class="banner-part">
          <img :src="images.small"
               :data-src="images.xlarge"
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
</template>

<script>
import I18n from '../i18n'

export default {
  data() {
    return {
      images: gon.images.banner,
      bannerWidth: 0,
      bannerHeight: 0,
      I18n: I18n,
    }
  },
  computed: {
    banner_style() {
      return {
        width: this.bannerWidth + 'px',
        height: this.bannerHeight + 'px',
      }
    },
    banner_image_class() {
      if (this.bannerWidth < this.bannerHeight) {
        return 'b-lazy banner-img bgheight'
      }
      return 'b-lazy banner-img bgwidth'
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.getDimensions)

      //Init
      this.getDimensions()
    })
  },
  methods: {
    getDimensions(event) {
      this.bannerWidth = document.documentElement.clientWidth
      this.bannerHeight = document.documentElement.clientHeight
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getDimensions)
  }
}
</script>

<style lang="scss" scoped>
.banner {
  .row {
    background: #cacaca;
    margin: 0;
    overflow: hidden;

    .no-padd {
      padding: 0;
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
    width: auto;
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
}
</style>
