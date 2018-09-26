<template>
  <section id="contact">
    <section class="contact">
      <div class="container top-con">
        <div class="heading">
          <h2>{{ I18n.t('title', { scope: 'contact' }) }}</h2>
          <p>{{ I18n.t('subtitle', { scope: 'contact' }) }}</p>
        </div>
      </div>
    </section>
    <section class="contact-details">
      <div class="container">
        <!--contact info start-->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h4>{{ I18n.t('title', { scope: 'contact.contacts' }) }}</h4>
          <div class="row">
            <p class="location col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <font-awesome-icon prefix="fas" :icon="iconMap"></font-awesome-icon>
              <span>{{about.city}}</span>  - <span>{{about.country}}</span>
            </p>
            <p class="phone_number col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <font-awesome-icon prefix="fas" :icon="iconMobile"></font-awesome-icon>
              {{about.phone_number}}
            </p>
            <p class="email col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <font-awesome-icon prefix="fas" :icon="iconEmail"></font-awesome-icon>
              {{about.email}}
            </p>
            <p class="github col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <font-awesome-icon prefix="fab" :icon="iconGithub"></font-awesome-icon>
              <a href="https://github.com/gmmcal" target="_blank" rel="noopener">{{I18n.t('github', {scope: 'contact.contacts'})}}</a>
            </p>
            <p class="linkedin col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <font-awesome-icon prefix="fab" :icon="iconLinkedin"></font-awesome-icon>
              <a href="https://linkedin.com/in/gmmcal" target="_blank" rel="noopener">{{I18n.t('linkedin', {scope: 'contact.contacts'})}}</a>
            </p>
            <p class="twitter col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <font-awesome-icon prefix="fab" :icon="iconTwitter"></font-awesome-icon>
              <a href="https://twitter.com/gmmcal" target="_blank" rel="noopener">{{I18n.t('twitter', {scope: 'contact.contacts'})}}</a>
            </p>
          </div>
        </div>
        <!--contact info end-->
      </div>
    </section>
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
.contact {
  background: #fff;

  .container {
    padding-bottom: 90px;
    padding-top: 85px;
  }

  h2 {
    color: #ff675f;
  }

  p {
    color: #84868d;
    //font-size: 13px;
    line-height: 18px;
  }

  .heading p {
    padding-bottom: 41px;
  }

  h4 {
    font-weight: 700;
  }

  .top-con {
    padding-bottom: 0;
  }
}

.contact-details {
  background: #474d5d;

  .container {
    padding-bottom: 90px;
    padding-top: 85px;
  }

  h4 {
    font-weight: 600;
    padding-bottom: 15px;
    text-transform: uppercase;
  }

  p {
    color: #93959c;
    font-size: 13px;
    line-height: 19px;
    padding-bottom: 14px;

    a {
      color: #93959c;

      &:hover {
        color: #a9abb0;
        text-decoration: none;
      }
    }
  }

  svg {
    margin-right: 15px;
  }
}
</style>
