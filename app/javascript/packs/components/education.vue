<template>
  <div class="row education-details">
    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-2 left-area">
      <div class="year">
        <span class="end">{{ end_date }}</span>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-9 col-lg-10 right-area">
      <div class="arrowpart"></div>
      <div class="ex-con">
        <h4>{{ education.institution }}</h4>
        <h5>{{ education.course }}</h5>
        <vue-markdown class="description">{{ education.description }}</vue-markdown>
      </div>
    </div>
  </div>
</template>

<script>
import I18n from '../i18n'
import VueMarkdown from './markdown'

export default {
  props: {
    education: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      I18n: I18n,
    }
  },
  computed: {
    end_date() {
      if (this.education.end_date === null) {
        return I18n.t('current', { scope: 'frontend.template' })
      }
      return I18n.l('date.formats.default', this.education.end_date)
    }
  },
  components: {
    'vue-markdown': VueMarkdown,
  },
}
</script>

<style lang="scss" scoped>
@import "./app/assets/stylesheets/components/education";
</style>
