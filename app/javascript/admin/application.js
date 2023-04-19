import '@hotwired/turbo-rails'
import sort from './components/sortable'
import modal from './components/modal'

document.addEventListener('turbo:load', () => {
  modal('[data-toggle=modal]')
  sort('.sortable')
})
