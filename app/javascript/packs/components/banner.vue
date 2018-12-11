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
.banner {
  background-color: #1b1f2b;
  height: 100vh;
  position: relative;
  width: 100vw;

  .banner-img {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;

    &::after {
      filter: alpha(opacity = 20); // For IE8 and earlier
      opacity: .2;
      background-position: top center;
      background-repeat: no-repeat;
      background-size: cover;
      content: "";
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
    }

    .banner-text {
      text-align: center;
      align-self: center;

      h1 {
        font-size: 42px;
        font-weight: 100;
        letter-spacing: 16px;
        line-height: 40px;
        text-transform: uppercase;

        @media screen and (min-width: 650px) {
          font-size: 51px;
          line-height: 60px;
        }

        @media screen and (min-width: 991px) {
          font-size: 65px;
          line-height: 90px;
        }
      }

      h2 {
        letter-spacing: 8px;
        text-transform: uppercase;
        font-size: 15px;
        line-height: 24px;
        padding-top: 10px;

        @media screen and (min-width: 650px) {
          font-size: 17px;
          line-height: 34px;
        }

        @media screen and (min-width: 991px) {
          font-size: 28px;
          line-height: 45px;
        }
      }
    }
  }
}
</style>
