<template>
  <section class="about-me" id="about">
    <div class="container">
      <div class="heading">
        <h2>{{ I18n.t('title', { scope: 'about' }) }}</h2>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
          <h3>{{ I18n.t('name', { scope: 'template' }) }}</h3>
          <h4 class="sub-heading">{{ about.job_title }}</h4>
          <vue-markdown>{{ about.description }}</vue-markdown>
          <a :href="about.cv" class="bnt-download" target="_blank" rel="noopener">{{ I18n.t('file_title', { scope: 'about'}) }}</a>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 offset-md-1 offset-lg-1 pro-pic">
          <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" :data-src="image" :alt="I18n.t('name', { scope: 'template' })" class="topmar b-lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import I18n from '../i18n'
import VueMarkdown from 'vue-markdown'

export default {
  props: ['image'],
  data() {
    return {
      about: gon.about,
      I18n: I18n,
    }
  },
  components: {
    'vue-markdown': VueMarkdown,
  },
}
</script>

<style lang="scss" scoped>
.about-me {
  background: #00bdbd;
  color: #fff;
  position: relative;

  .container {
    padding-top: 85px;
  }

  .about-top {
    background: #00bdbd;
    height: 60px;
  }

  .bnt-download {
    background: #474d5d;
    display: inline-block;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    padding: 16px 22px;

    &:hover,
    &:active,
    &:focus {
      background: #373d4c;
      color: #ccc;
      text-decoration: none;
    }

    @media screen and (max-width: 400px) {
      font-size: 13px;
      padding: 16px 14px;
    }
  }

  .pro-pic {
    @media screen and (max-width: 991px) {
      text-align: center;
    }
  }

  .topmar {
    margin-top: -100px;

    @media screen and (max-width: 991px) {
      margin-top: 20px;
    }

    @media screen and (max-width: 810px) {
      margin-top: 20px;
    }

    @media screen and (max-width: 768px) {
      margin-top: 20px;
    }

    @media screen and (max-width: 767px) {
      margin-top: 20px;
    }

    @media screen and (max-width: 650px) {
      margin-top: 20px;
    }

    @media screen and (max-width: 480px) {
      margin-top: 20px;
    }

    @media screen and (max-width: 400px) {
      margin-top: 20px;
      width: 100%;
    }
  }
}
</style>
