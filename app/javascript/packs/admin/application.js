import Rails from 'rails-ujs'
import Turbolinks from 'turbolinks'
import sort from './sortable'

Rails.start()
Turbolinks.start()

document.addEventListener('turbolinks:load', () => {
  const selector = '.sortable'
  const el = document.querySelector(selector)
  if (el !== null) {
    sort(selector)
  }
})
