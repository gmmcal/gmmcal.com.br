import './commands'
import './on-rails'

Cypress.on('uncaught:exception', () => {
  return false
})

Cypress.on('window:load', $window => {
  $window.document.addEventListener('turbo:click', event => {
    event.preventDefault()
  })
})
