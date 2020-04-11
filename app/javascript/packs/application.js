/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Turbolinks from 'turbolinks'
import { config, library, dom } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faGitlab, faDev, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { handleScroll, handleClick, handleMenu } from './behavior'

import 'stylesheets/application'

Turbolinks.start()

document.addEventListener('turbolinks:load', () => {
  // fullstack page - most of these code will be moved to it's own files once rebuild is done
  // lazy load images
  const lazy = document.getElementsByClassName('lazy')
  const indexes = Array.from(Array(lazy.length).keys())
  indexes.map(index => lazy.item(index).classList.add('visible'))

  // fontawesome
  config.mutateApproach = 'sync'
  library.add(
    faGithub, faGitlab, faDev, faTwitter, faLinkedinIn, faMapMarkerAlt, faMobileAlt, faEnvelope
  )
  dom.watch()

  // menu handling
  // main menu
  const menu_items = document.querySelectorAll('.menu-container .nav-link')
  menu_items.forEach(element => {
    element.onclick = handleClick
  })
  // hamburger menu
  document.querySelector('.navbar-toggler').onclick = handleMenu
  // page scroll
  window.addEventListener("scroll", scroll)
  window.addEventListener("resize", scroll)

  if (!document.getElementById('offline') && navigator.serviceWorker) {
    navigator.serviceWorker.register('/service-worker.js', { scope: './' })
  }
})

const scroll = () => {
  const selected = handleScroll(gon.menu_links.slice())
  const menu_items = document.querySelectorAll('.menu-container .nav-link')
  menu_items.forEach(element => {
    element.classList.remove('active')
  })
  document.getElementById("menu-" + selected).classList.add('active')
}

const click = () => {
  const menu_items = document.querySelectorAll('.menu-container .nav-link')
  menu_items.forEach(element => {
    element.onclick = handleClick
  })
}
