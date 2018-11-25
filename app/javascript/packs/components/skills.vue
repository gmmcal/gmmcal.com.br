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
.technical {
  background: #fff;
  color: #474d5d;

  .container {
    padding-bottom: 69px;
    padding-top: 85px;
  }

  p {
    color: #474d5d;
    padding-bottom: 41px;
  }

  h2 {
    color: #ff675f;
  }

  .row {
    display: block;
    text-align: center;
    font-size: 6px;

    @media screen and (min-width: 420px) and (max-width: 768px) {
      font-size: 7px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 8px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 10px;
    }
  }
}
</style>
