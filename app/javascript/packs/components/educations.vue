<template>
  <section class="education" id="education">
    <div class="container">
      <div class="heading">
        <h2>{{ I18n.t('title', { scope: 'education' }) }}</h2>
        <p>{{ I18n.t('subtitle', { scope: 'education' }) }}</p>
      </div>
      <vue-education v-for="education in educations" :education="education" :key="education.id" />
    </div>
  </section>
</template>

<script>
import I18n from '../i18n'
import Education from './education'

export default {
  data() {
    return {
      educations: gon.educations,
      I18n: I18n,
    }
  },
  components: {
    'vue-education': Education,
  }
}
</script>
