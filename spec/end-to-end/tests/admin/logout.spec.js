/// <reference types="Cypress" />

describe('Logout', () => {
  before(() => {
    cy.login()
  })

  beforeEach(() => {
    cy.visit('/admin')
  })

  it('redirects to home after logout', () => {
    cy.contains('a', 'Logout').click()
    cy.url().should('not.include', '/admin')
  })
})
