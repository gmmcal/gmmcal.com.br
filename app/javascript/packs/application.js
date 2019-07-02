/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Turbolinks from 'turbolinks'
import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import Header from './components/header.vue'
import Body from './components/body.vue'
import Footer from './components/footer.vue'
import Error404 from './components/error-404.vue'
import Error422 from './components/error-422.vue'
import Error500 from './components/error-500.vue'
import I18n from './i18n'

import 'stylesheets/application'

Vue.use(TurbolinksAdapter)

Turbolinks.start()

document.addEventListener('turbolinks:load', () => {
  if(document.getElementById('wrapper')) {
    new Vue({
      el: '#wrapper',
      components: {
        'vue-header': Header,
        'vue-body': Body,
        'vue-footer': Footer,
        'vue-error-404': Error404,
        'vue-error-422': Error422,
        'vue-error-500': Error500,
      },
      mounted() {
        I18n.locale = document.getElementById('home').getAttribute('data-locale')
        const lazy = document.getElementsByClassName('lazy')
        const indexes = Array.from(Array(lazy.length).keys())
        indexes.map(index => lazy.item(index).classList.add('visible'))
      }
    })
  }
  if (!document.getElementById('offline') && navigator.serviceWorker) {
    navigator.serviceWorker.register('/service-worker.js', { scope: './' })
  }
})
