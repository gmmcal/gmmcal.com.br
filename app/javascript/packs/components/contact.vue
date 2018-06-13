<template>
  <section id="contact">
    <section class="contact">
      <div class="container top-con">
        <div class="heading">
          <h2>{{I18n.t('title', {scope: 'contact'})}}</h2>
          <p>{{I18n.t('subtitle', {scope: 'contact'})}}</p>
        </div>
      </div>
    </section>
    <section class="contact-details">
      <div class="container">
        <!--contact info start-->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h4></h4>
          <p class="col-xs-12 col-sm-4 col-md-4 col-lg-4" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress"> <i class="fa fa-map-marker fa-lg"></i> <span itemprop="addressLocality">{{about.city}}</span>  - <span itemprop="addressCountry">{{about.country}}</span></p>
          <p class="col-xs-12 col-sm-4 col-md-4 col-lg-4" itemprop="telephone"> <i class="fa fa-mobile fa-lg"></i> {{about.phone_number}}</p>
          <p class="col-xs-12 col-sm-4 col-md-4 col-lg-4" itemprop="email"> <i class="fa fa-envelope-o "></i> {{about.email}}</p>
          <p class="col-xs-12 col-sm-4 col-md-4 col-lg-4"> <i class="fa fa-github"></i> <a href="https://github.com/gmmcal" target="_blank">{{I18n.t('github', {scope: 'contact.contacts'})}}</a></p>
          <p class="col-xs-12 col-sm-4 col-md-4 col-lg-4"> <i class="fa fa-linkedin"></i> <a href="https://linkedin.com/in/gmmcal" target="_blank">{{I18n.t('linkedin', {scope: 'contact.contacts'})}}</a></p>
          <p class="col-xs-12 col-sm-4 col-md-4 col-lg-4"> <i class="fa fa-twitter"></i> <a href="https://twitter.com/gmmcal" target="_blank">{{I18n.t('twitter', {scope: 'contact.contacts'})}}</a></p>
        </div>
        <!--contact info end-->
      </div>
    </section>
  </section>
</template>

<script>
import I18n from '../i18n'

export default {
  data: function() {
    return {
      about: gon.about,
      I18n: I18n,
    }
  }
}
</script>
