<template>
  <section class="experience" id="experience">
    <div class="container">
      <div class="heading">
        <h2>{{ I18n.t('title', { scope: 'frontend.experience' }) }}</h2>
        <p>{{ I18n.t('subtitle', { scope: 'frontend.experience' }) }}</p>
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

<style lang="scss" scoped>
.experience {
  background: #eee;

  .container {
    padding-bottom: 90px;
    padding-top: 85px;
  }

  h2 {
    color: #ff675f;
  }

  .heading p {
    padding-bottom: 41px;
    color: #84868d;
    line-height: 18px;
  }
}
</style>
