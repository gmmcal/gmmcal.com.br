/// <reference types="Cypress" />

describe('Profile', () => {
  before(() => {
    cy.login()
  })

  after(() => {
    cy.logout()
  })

  describe('Edit', () => {
    before(() => {
      cy.visit('/admin')
      cy.contains('a', 'Profile').click()
    })

    context('With invalid data', () => {
      context('with empty form', () => {
        before(function () {
          cy.get('#edit_user').within(($form) => {
            cy.get('input[name="user[first_name]"]').clear()
            cy.get('input[name="user[last_name]"]').clear()
            cy.get('input[name="user[email]"]').clear()
            cy.get('select[name="user[default_locale]"]').select('')
            cy.get('input[value="Update"]').click({force: true})
          })
        })

        it('shows the form', () => {
          cy.get('#edit_user').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('#edit_user .alert').should('have.text', 'Please review the problems below:')
        })

        it('shows failure message for first_name', () => {
          cy.get('#edit_user div.user_first_name .invalid-feedback').should('be.visible')
        })

        it('shows failure message for last_name', () => {
          cy.get('#edit_user div.user_last_name .invalid-feedback').should('be.visible')
        })

        it('shows failure message for email', () => {
          cy.get('#edit_user div.user_email .invalid-feedback').should('be.visible')
        })

        it('shows failure message for default_locale', () => {
          cy.get('#edit_user div.user_default_locale .invalid-feedback').should('be.visible')
        })
      })

      context('with some required fields filled', () => {
        before(function () {
          cy.get('#edit_user').within(($form) => {
            cy.get('input[name="user[first_name]"]').clear().type('Gustavo')
            cy.get('input[value="Update"]').click({force: true})
          })
        })

        it('shows the form', () => {
          cy.get('#edit_user').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('#edit_user .alert').should('have.text', 'Please review the problems below:')
        })

        it('do not show failure message for first_name', () => {
          cy.get('#edit_user div.user_first_name .invalid-feedback').should('not.exist')
        })

        it('shows failure message for last_name', () => {
          cy.get('#edit_user div.user_last_name .invalid-feedback').should('be.visible')
        })

        it('shows failure message for email', () => {
          cy.get('#edit_user div.user_email .invalid-feedback').should('be.visible')
        })

        it('shows failure message for default_locale', () => {
          cy.get('#edit_user div.user_default_locale .invalid-feedback').should('be.visible')
        })
      })

      context('with invalid email', () => {
        before(function () {
          cy.get('#edit_user').within(($form) => {
            cy.get('input[name="user[first_name]"]').clear()
            cy.get('input[name="user[email]"]').clear().type('email')
            cy.get('input[value="Update"]').click({force: true})
          })
        })

        it('shows the form', () => {
          cy.get('#edit_user').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('#edit_user .alert').should('have.text', 'Please review the problems below:')
        })

        it('shows failure message for first_name', () => {
          cy.get('#edit_user div.user_first_name .invalid-feedback').should('be.visible')
        })

        it('shows failure message for last_name', () => {
          cy.get('#edit_user div.user_last_name .invalid-feedback').should('be.visible')
        })

        it('shows failure message for email', () => {
          cy.get('#edit_user div.user_email .invalid-feedback').should('be.visible')
        })

        it('shows failure message for default_locale', () => {
          cy.get('#edit_user div.user_default_locale .invalid-feedback').should('be.visible')
        })
      })

      context('with valid email', () => {
        before(function () {
          cy.get('#edit_user').within(($form) => {
            cy.get('input[name="user[first_name]"]').clear()
            cy.get('input[name="user[email]"]').clear().type('email@example.com')
            cy.get('input[value="Update"]').click({force: true})
          })
        })

        it('shows the form', () => {
          cy.get('#edit_user').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('#edit_user .alert').should('have.text', 'Please review the problems below:')
        })

        it('shows failure message for first_name', () => {
          cy.get('#edit_user div.user_first_name .invalid-feedback').should('be.visible')
        })

        it('shows failure message for last_name', () => {
          cy.get('#edit_user div.user_last_name .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for email', () => {
          cy.get('#edit_user div.user_email .invalid-feedback').should('not.exist')
        })

        it('shows failure message for default_locale', () => {
          cy.get('#edit_user div.user_default_locale .invalid-feedback').should('be.visible')
        })
      })
    })

    context('With valid data', () => {
      before(function () {
        cy.get('#edit_user').within(($form) => {
          cy.get('input[name="user[first_name]"]').clear().type('Gustavo')
          cy.get('input[name="user[last_name]"]').clear().type('Cunha')
          cy.get('input[name="user[email]"]').clear().type('email@example.com')
          cy.get('select[name="user[default_locale]"]').select('en')
          cy.get('input[value="Update"]').click({force: true})
        })
      })

      it('shows the form', () => {
        cy.get('#edit_user').should('be.visible')
      })

      it('shows confirmation message', () => {
        cy.get('.alert').should('have.text', 'Profile was successfully updated.')
      })
    })
  })

  describe('Change Password', () => {
    before(() => {
      cy.visit('/admin')
      cy.contains('a', 'Profile').click()
    })

    context('With invalid data', () => {
      context('with empty form', () => {
        before(function () {
          cy.get('#change_password').within(($form) => {
            cy.get('input[name="user[password]"]').clear()
            cy.get('input[name="user[password_confirmation]"]').clear()
            cy.get('input[value="Update"]').click({force: true})
          })
        })

        it('shows the form', () => {
          cy.get('#change_password').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('#change_password .alert').should('have.text', 'Please review the problems below:')
        })

        it('shows failure message for password', () => {
          cy.get('#change_password div.user_password .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for password_confirmation', () => {
          cy.get('#change_password div.user_password_confirmation .invalid-feedback').should('not.exist')
        })
      })

      context('with only password filled', () => {
        context('with invalid password', () => {
          before(function () {
            cy.get('#change_password').within(($form) => {
              cy.get('input[name="user[password]"]').clear().type('password')
              cy.get('input[name="user[password_confirmation]"]').clear()
              cy.get('input[value="Update"]').click({force: true})
            })
          })

          it('shows the form', () => {
            cy.get('#change_password').should('be.visible')
          })

          it('shows error message', () => {
            cy.get('#change_password .alert').should('have.text', 'Please review the problems below:')
          })

          it('shows failure message for password', () => {
            cy.get('#change_password div.user_password .invalid-feedback').should('be.visible')
          })

          it('shows error reason for password', () => {
            cy.get('#change_password div.user_password .invalid-feedback').should('have.text', 'Password is too short (minimum is 10 characters)')
          })

          it('shows failure message for password_confirmation', () => {
            cy.get('#change_password div.user_password_confirmation .invalid-feedback').should('be.visible')
          })
        })

        context('with valid password', () => {
          before(function () {
            cy.get('#change_password').within(($form) => {
              cy.get('input[name="user[password]"]').clear().type('password10')
              cy.get('input[name="user[password_confirmation]"]').clear()
              cy.get('input[value="Update"]').click({force: true})
            })
          })

          it('shows the form', () => {
            cy.get('#change_password').should('be.visible')
          })

          it('shows error message', () => {
            cy.get('#change_password .alert').should('have.text', 'Please review the problems below:')
          })

          it('do not show failure message for password', () => {
            cy.get('#change_password div.user_password .invalid-feedback').should('not.exist')
          })

          it('shows failure message for password_confirmation', () => {
            cy.get('#change_password div.user_password_confirmation .invalid-feedback').should('be.visible')
          })

          it('shows mismatch reason for password_confirmation', () => {
            cy.get('#change_password div.user_password_confirmation .invalid-feedback').should('have.text', 'Confirm your Password doesn\'t match Password')
          })
        })
      })

      context('with only confirmation password filled', () => {
        before(function () {
          cy.get('#change_password').within(($form) => {
            cy.get('input[name="user[password]"]').clear()
            cy.get('input[name="user[password_confirmation]"]').clear().type('password10')
            cy.get('input[value="Update"]').click({force: true})
          })
        })

        it('shows the form', () => {
          cy.get('#change_password').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('#change_password .alert').should('have.text', 'Please review the problems below:')
        })

        it('shows failure message for password', () => {
          cy.get('#change_password div.user_password .invalid-feedback').should('be.visible')
        })

        it('shows failure message for password_confirmation', () => {
          cy.get('#change_password div.user_password_confirmation .invalid-feedback').should('be.visible')
        })

        it('shows mismatch reason for password_confirmation', () => {
          cy.get('#change_password div.user_password_confirmation .invalid-feedback').should('have.text', 'Confirm your Password doesn\'t match Password')
        })
      })

      context('with mismatching passwords', () => {
        before(function () {
          cy.get('#change_password').within(($form) => {
            cy.get('input[name="user[password]"]').clear().type('password10')
            cy.get('input[name="user[password_confirmation]"]').clear().type('password20')
            cy.get('input[value="Update"]').click({force: true})
          })
        })

        it('shows the form', () => {
          cy.get('#change_password').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('#change_password .alert').should('have.text', 'Please review the problems below:')
        })

        it('do not show failure message for password', () => {
          cy.get('#change_password div.user_password .invalid-feedback').should('not.exist')
        })

        it('shows failure message for password_confirmation', () => {
          cy.get('#change_password div.user_password_confirmation .invalid-feedback').should('be.visible')
        })

        it('shows mismatch reason for password_confirmation', () => {
          cy.get('#change_password div.user_password_confirmation .invalid-feedback').should('have.text', 'Confirm your Password doesn\'t match Password')
        })
      })
    })

    context('With valid data', () => {
      before(function () {
        cy.get('#change_password').within(($form) => {
          cy.get('input[name="user[password]"]').clear().type('password2018')
          cy.get('input[name="user[password_confirmation]"]').clear().type('password2018')
          cy.get('input[value="Update"]').click({force: true})
        })
      })

      it('shows the form', () => {
        cy.get('#change_password').should('be.visible')
      })

      it('shows confirmation message', () => {
        cy.get('.alert').should('have.text', 'Profile was successfully updated.')
      })
    })
  })
})
