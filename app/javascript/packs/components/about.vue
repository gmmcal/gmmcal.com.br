<template>
  <section class="aboutme" id="aboutme">
    <div class="container">
      <div class="heading">
        <h2>{{ I18n.t('title', { scope: 'about' }) }}</h2>
      </div>
      <div class="row">
        <div class=" col-xs-12 col-sm-12 col-md-7 col-lg-7">
          <h3 itemprop="name">{{ I18n.t('name', { scope: 'template' }) }}</h3>
          <h4 class="sub-heading" itemprop="jobTitle">{{ about.job_title }}</h4>
          {{ about.description }}
          <a :href="about.cv" class="bnt-download" target="_blank">{{ I18n.t('file_title', { scope: 'about'}) }}</a>
        </div>
        <div class=" col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-1 col-lg-offset-1 pro-pic">
          <img :src="image" :alt="I18n.t('name', { scope: 'template' })" class="topmar" itemprop="image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import I18n from '../i18n'

export default {
  props: ['image'],
  data: function() {
    return {
      about: gon.about,
      I18n: I18n,
    }
  }
}
</script>
