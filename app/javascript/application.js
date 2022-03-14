/* eslint no-console:0 */
// Entry point for the build script in your package.json

import Turbolinks from 'turbolinks'
import { Icons, Images, Menu, Worker } from './frontend'
import { handleClick, handleMenu } from './behavior'

// import 'stylesheets/application'

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
