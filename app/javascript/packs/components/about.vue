<template>
  <section class="about-me" id="about">
    <div class="container">
      <div class="heading">
        <h2>{{ I18n.t('title', { scope: 'frontend.about' }) }}</h2>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 pb-48 details">
          <h3>{{ I18n.t('name', { scope: 'frontend.template' }) }}</h3>
          <h4 class="sub-heading">{{ about.job_title }}</h4>
          <vue-markdown class="description">{{ about.description }}</vue-markdown>
          <a :href="about.cv" class="btn-download" data-turbolinks="false" rel="noopener">{{ I18n.t('file_title', { scope: 'frontend.about'}) }}</a>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4 offset-lg-1 image">
          <div class="lazy topmar"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import I18n from '../i18n'
import VueMarkdown from './markdown'

export default {
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
@import "stylesheets/components/about";
</style>
