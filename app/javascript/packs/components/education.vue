<template>
  <div class="row work-details" itemprop="alumniOf" itemscope itemtype="https://schema.org/CollegeOrUniversity">
    <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">
      <div class="work-year">{{ end_date }}</div>
    </div>
    <div class="col-xs-12 col-sm-9 col-md-10 col-lg-10 right-area">
      <div class="arrowpart"></div>
      <div class="ex-con">
        <h4>{{ education.institution }}</h4>
        <h5 itemprop="legalName">{{ education.course }}</h5>
        <vue-markdown class="description" itemprop="description">{{ education.description }}</vue-markdown>
      </div>
    </div>
  </div>
</template>

<script>
import I18n from '../i18n'
import VueMarkdown from 'vue-markdown'

export default {
  props: ['education'],
  data: function() {
    return {
      I18n: I18n,
    }
  },
  computed: {
    end_date: function() {
      if (this.education.end_date === null) {
        return I18n.t('current', { scope: 'template' })
      }
      return I18n.l('date.formats.default', this.education.end_date)
    }
  },
  components: {
    'vue-markdown': VueMarkdown,
  },
}
</script>
