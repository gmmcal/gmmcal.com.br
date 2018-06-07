/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

// import TurbolinksAdapter from 'vue-turbolinks';
import Vue from 'vue/dist/vue.esm'
import Header from './components/header.vue'
import Body from './components/body.vue'
import Footer from './components/footer.vue'
import MenuItem from './components/menu_item.vue'
import About from './components/about.vue'
import Skills from './components/skills.vue'
import Experience from './components/experience.vue'
import Education from './components/education.vue'
import Contact from './components/contact.vue'
import Social from './components/social.vue'

// Vue.use(TurbolinksAdapter)

Vue.component('vue-header', Header)
Vue.component('vue-body', Body)
Vue.component('vue-footer', Footer)
Vue.component('menu-item', MenuItem)
Vue.component('about', About)
Vue.component('skills', Skills)
Vue.component('experience', Experience)
Vue.component('education', Education)
Vue.component('contact', Contact)
Vue.component('social', Social)

// document.addEventListener('turbolinks:load', () => {
document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#wrapper'
  })
})
