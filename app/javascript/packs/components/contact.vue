<template>
  <section id="contact" class="contact">
    <div class="top-con">
      <div class="container">
        <div class="heading">
          <h2>{{ I18n.t('title', { scope: 'frontend.contact' }) }}</h2>
          <p>{{ I18n.t('subtitle', { scope: 'frontend.contact' }) }}</p>
        </div>
      </div>
    </div>
    <div class="bottom-con">
      <div class="container">
        <!--contact info start-->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h4>{{ I18n.t('title', { scope: 'frontend.contact.contacts' }) }}</h4>
          <div class="row">
            <p class="location col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <font-awesome-icon prefix="fas" :icon="iconMap"></font-awesome-icon>
              <span>{{about.city}}</span>  - <span>{{about.country}}</span>
            </p>
            <p class="phone_number col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <font-awesome-icon prefix="fas" :icon="iconMobile"></font-awesome-icon>
              {{about.phone_number}}
            </p>
            <p class="email col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <font-awesome-icon prefix="fas" :icon="iconEmail"></font-awesome-icon>
              {{about.email}}
            </p>
            <p class="github col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <font-awesome-icon prefix="fab" :icon="iconGithub"></font-awesome-icon>
              <a href="https://github.com/gmmcal" target="_blank" rel="noopener">{{ I18n.t('github', { scope: 'frontend.contact.contacts' }) }}</a>
            </p>
            <p class="linkedin col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <font-awesome-icon prefix="fab" :icon="iconLinkedin"></font-awesome-icon>
              <a href="https://linkedin.com/in/gmmcal" target="_blank" rel="noopener">{{ I18n.t('linkedin', { scope: 'frontend.contact.contacts' }) }}</a>
            </p>
            <p class="twitter col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <font-awesome-icon prefix="fab" :icon="iconTwitter"></font-awesome-icon>
              <a href="https://twitter.com/gmmcal" target="_blank" rel="noopener">{{ I18n.t('twitter', { scope: 'frontend.contact.contacts' }) }}</a>
            </p>
          </div>
        </div>
        <!--contact info end-->
      </div>
    </div>
  </section>
</template>

<script>
import I18n from '../i18n'
import { faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  data() {
    return {
      about: gon.about,
      I18n: I18n,
      iconMap: faMapMarkerAlt,
      iconMobile: faMobileAlt,
      iconEmail: faEnvelope,
      iconGithub: faGithub,
      iconLinkedin: faLinkedinIn,
      iconTwitter: faTwitter,
    }
  },
  components: {
    'font-awesome-icon': FontAwesomeIcon,
  }
}
</script>

<style lang="scss" scoped>
@import "./app/assets/stylesheets/components/contact";
</style>
