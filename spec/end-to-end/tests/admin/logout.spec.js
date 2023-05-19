/// <reference types="Cypress" />

describe('Logout', () => {
  before(() => {
    cy.login()
  })

  beforeEach(() => {
    cy.visit('/admin')
  })

  // TODO: Reenable this test and make it pass
  // it('redirects to home after logout', () => {
  //   cy.contains('a', 'Logout').click()
  //   cy.url().should('not.include', '/admin')
  // })
})
