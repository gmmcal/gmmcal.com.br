import './commands'
import './on-rails'

Cypress.on('uncaught:exception', (_err, _runnable) => {
  return false
})
