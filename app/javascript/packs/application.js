/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Turbolinks from 'turbolinks'
import { Icons, Images, Menu, Worker } from './frontend'
import { handleClick, handleMenu } from './behavior'

import 'stylesheets/application'

Turbolinks.start()

document.addEventListener('turbolinks:load', () => {
  // lazy load images
  new Images()
  // fontawesome
  new Icons()
  // menu
  new Menu('.menu-container .nav-link', handleClick).watch()
  new Menu('.navbar-toggler', handleMenu).watch()
  // worker
  new Worker()
})
