<template>
  <section class="aboutme" id="about">
    <div class="container">
      <div class="heading">
        <h2>{{ I18n.t('title', { scope: 'about' }) }}</h2>
      </div>
      <div class="row">
        <div class=" col-xs-12 col-sm-12 col-md-7 col-lg-7">
          <h3>{{ I18n.t('name', { scope: 'template' }) }}</h3>
          <h4 class="sub-heading">{{ about.job_title }}</h4>
          <vue-markdown>{{ about.description }}</vue-markdown>
          <a :href="about.cv" class="bnt-download" target="_blank">{{ I18n.t('file_title', { scope: 'about'}) }}</a>
        </div>
        <div class=" col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-1 col-lg-offset-1 pro-pic">
          <img :src="image" :alt="I18n.t('name', { scope: 'template' })" class="topmar" />
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
  data: function() {
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
