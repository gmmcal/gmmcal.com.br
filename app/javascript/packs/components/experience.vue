<template>
  <div class="row work-details" itemprop="worksFor" itemscope itemtype="https://schema.org/Organization">
    <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">
      <div class="work-year">{{ I18n.l('date.formats.default', experience.start_date) }}<br>{{ end_date }}</div>
    </div>
    <div class="col-xs-12 col-sm-9 col-md-10 col-lg-10 right-area">
      <div class="arrowpart"></div>
      <div class="ex-con">
        <h4><span itemprop="legalName">{{ experience.company_name }}</span> - <span itemprop="location" itemscope itemtype="https://schema.org/PostalAddress"><span itemprop="addressLocality">{{ experience.city }}</span> - <span itemprop="addressCountry">{{ experience.country }}</span></span></h4>
        <h5>{{ experience.position }}</h5>
        <p itemprop="description">{{ experience.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import I18n from '../i18n'

export default {
  props: ['experience'],
  data: function() {
    return {
      I18n: I18n,
    }
  },
  computed: {
    end_date: function() {
      if (this.experience.end_date === null) {
        return I18n.t('current', { scope: 'template' })
      }
      return I18n.l('date.formats.default', this.experience.end_date)
    }
  }
}
</script>
