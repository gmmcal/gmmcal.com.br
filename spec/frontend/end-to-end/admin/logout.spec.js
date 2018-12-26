/// <reference types="Cypress" />

describe('About', () => {
  before(() => {
    cy.login()
  })

  beforeEach(() => {
    cy.visit('/admin')
  })

  it('redirects to home after logout', () => {
    cy.get('a').contains('Logout').click()
    cy.url().should('not.include', '/admin')
  })
})
