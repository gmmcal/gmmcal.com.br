/* eslint no-console:0 */
// Entry point for the build script in your package.json

import '@hotwired/turbo-rails'
import { Icons, Images, Menu, Worker } from './frontend'
import { handleClick, handleMenu } from './behavior'


document.addEventListener('turbo:load', () => {
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
