<template>
  <div class="banner">
    <div class="lazy banner-img">
      <div class="banner-text container">
        <h1>{{ I18n.t('name', { scope: 'frontend.template' }) }}</h1>
        <h2>{{ I18n.t('title', { scope: 'frontend.template' }) }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import I18n from '../i18n'

export default {
  data() {
    return {
      I18n: I18n,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./app/assets/stylesheets/components/banner";
</style>
