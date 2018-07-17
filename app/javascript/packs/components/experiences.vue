<template>
  <section class="experience" id="experience">
    <div class="container">
      <div class="heading">
        <h2>{{ I18n.t('title', { scope: 'experience' }) }}</h2>
        <p>{{ I18n.t('subtitle', { scope: 'experience' }) }}</p>
      </div>
      <vue-experience v-for="experience in experiences" :experience="experience" :key="experience.id" />
    </div>
  </section>
</template>

<script>
import I18n from '../i18n'
import Experience from './experience'

export default {
  data() {
    return {
      experiences: gon.experiences,
      I18n: I18n,
    }
  },
  components: {
    'vue-experience': Experience,
  }
}
</script>
