/// <reference types="Cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/admin')
  })

  afterEach(() => {
    cy.logout()
  })

  context('With only email filled', () => {
    beforeEach(() => {
      cy.get('input[name="user[email]"]').type('email@example.com')
      cy.get('input[value="Login"]').click()
    })

    it('fails if username and password doesn\'t match', () => {
      cy.url().should('include', '/admin/login')
    })

    it('shows error message', () => {
      cy.get('.alert').should('have.text', 'Invalid E-mail or password.')
    })
  })

  context('With only password filled', () => {
    beforeEach(() => {
      cy.get('input[name="user[email]"]')
      cy.get('input[name="user[password]"]').type('password2018')
      cy.get('input[value="Login"]').click()
    })

    it('fails if username and password doesn\'t match', () => {
      cy.url().should('include', '/admin/login')
    })

    it('shows error message', () => {
      cy.get('.alert').should('have.text', 'Invalid E-mail or password.')
    })
  })

  context('With email and password filled', () => {
    context('With valid information', () => {
      beforeEach(() => {
        cy.get('input[name="user[email]"]').type('email@example.com')
        cy.get('input[name="user[password]"]').type('password2018')
        cy.get('input[value="Login"]').click()
      })

      it('is successful', () => {
        cy.url().should('include', '/admin')
      })

      it('shows welcome message', () => {
        cy.get('.alert').should('have.text', 'Signed in successfully.')
      })
    })

    context('With invalid information', () => {
      beforeEach(() => {
        cy.get('input[name="user[email]"]').type('email@example.com')
        cy.get('input[name="user[password]"]').type('passwordpassword')
        cy.get('input[value="Login"]').click()
      })

      it('fails if username and password doesn\'t match', () => {
        cy.url().should('include', '/admin/login')
      })

      it('shows error message', () => {
        cy.get('.alert').should('have.text', 'Invalid E-mail or password.')
      })
    })
  })
})
