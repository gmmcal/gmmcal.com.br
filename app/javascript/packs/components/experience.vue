<template>
  <div class="row work-details">
    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-2 left-area">
      <div class="year">
        <span class="start">{{ experience.start_date }}</span>
        <span class="end">{{ experience.end_date }}</span>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-9 col-lg-10 right-area">
      <div class="arrowpart"></div>
      <div class="ex-con">
        <h4><span>{{ experience.company_name }}</span> - <span><span>{{ experience.city }}</span> - <span>{{ experience.country }}</span></span></h4>
        <h5>{{ experience.position }}</h5>
        <vue-markdown class="description">{{ experience.description }}</vue-markdown>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from './markdown'

export default {
  props: {
    experience: {
      type: Object,
      required: true
    }
  },
  components: {
    'vue-markdown': VueMarkdown,
  },
}
</script>

<style lang="scss" scoped>
@import "stylesheets/components/experience";
</style>
