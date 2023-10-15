// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import '@hotwired/turbo-rails'
import Icons from 'frontend/icons'
import Images from 'frontend/images'
import Menu from 'frontend/menu'
import Worker from 'frontend/worker'
import handleClick from 'behavior/click-handle'
import handleMenu from 'behavior/menu-handle'


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
