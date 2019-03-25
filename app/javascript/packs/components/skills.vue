<template>
  <section class="technical" id="skills">
    <div class="container">
      <div class="heading">
        <h2>{{ I18n.t('title', { scope: 'frontend.skills' }) }}</h2>
        <p>{{ I18n.t('subtitle', { scope: 'frontend.skills' }) }}</p>
      </div>
      <div class="row">
        <vue-skill v-for="skill in skills" :skill="skill" :key="skill.id" />
      </div>
    </div>
  </section>
</template>

<script>
import I18n from '../i18n'
import Skill from './skill'

export default {
  data() {
    return {
      skills: gon.skills,
      I18n: I18n,
    }
  },
  components: {
    'vue-skill': Skill,
  },
}
</script>

<style lang="scss" scoped>
@import "./app/assets/stylesheets/components/skills";
</style>
