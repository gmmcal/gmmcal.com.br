/// <reference types="Cypress" />

describe('Skill', () => {
  beforeEach(() => {
    cy.login()
  })

  afterEach(() => {
    cy.logout()
  })

  describe('List', () => {
    beforeEach(() => {
      cy.appScenario('skill/list')
      cy.visit('/admin')
      cy.contains('.sidebar a', 'Interests').click({force: true})
    })

    it('shows the current content', () => {
      cy.get('.list-group-item').should('be.visible')
    })

    it('has 2 items', () => {
      cy.get('.list-group-item').should('have.length', 2)
    })
  })

  describe('Create', () => {
    beforeEach(() => {
      cy.app('clean')
      cy.visit('/admin')
      cy.contains('.sidebar a', 'Interests').click({force: true})
      cy.contains('a.btn', 'New').click({force: true})
    })

    context('With invalid data', () => {
      context('with empty form', () => {
        beforeEach(function () {
          cy.get('input[name="skill[value]"]').clear()
          cy.get('input[value="Save"]').click({force: true})
        })

        it('shows the form', () => {
          cy.get('form.new_skill').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('.alert').should('have.text', 'Please review the problems below:')
        })

        it('shows failure message for name', () => {
          cy.get('div.skill_name .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for value', () => {
          cy.get('div.skill_value .invalid-feedback').should('be.visible')
        })

        it('shows failure message for locale', () => {
          cy.get('div.skill_locale .invalid-feedback').should('be.visible')
        })
      })

      context('with some required fields filled', () => {
        beforeEach(function () {
          cy.get('input[name="skill[name]"]').clear().type('Software Engineer')
          cy.get('input[name="skill[value]"]').clear()
          cy.get('input[value="Save"]').click({force: true})
        })

        it('shows the form', () => {
          cy.get('form.new_skill').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('.alert').should('have.text', 'Please review the problems below:')
        })

        it('do not failure message for name', () => {
          cy.get('div.skill_name .invalid-feedback').should('not.exist')
        })

        it('shows show failure message for value', () => {
          cy.get('div.skill_value .invalid-feedback').should('be.visible')
        })

        it('shows failure message for locale', () => {
          cy.get('div.skill_locale .invalid-feedback').should('be.visible')
        })
      })
    })

    context('With valid data', () => {
      beforeEach(() => {
        cy.get('input[name="skill[name]"]').clear().type('Ruby on rails')
        cy.get('input[name="skill[value]"]').clear().type(90)
        cy.get('select[name="skill[locale]"]').select('en')
        cy.get('input[value="Save"]').click({force: true})
      })

      it('is successful', () => {
        cy.get('.list-group-item h5').should('have.text', 'Ruby on rails')
      })

      it('shows confirmation message', () => {
        cy.get('.alert').should('have.text', 'Interest was successfully created.')
      })
    })
  })

  describe('Edit', () => {
    beforeEach(() => {
      cy.appScenario('skill/edit')
      cy.visit('/admin')
      cy.contains('.sidebar a', 'Interests').click({force: true})
      cy.contains('.btn-outline-primary', 'Edit').click({force: true})
    })

    context('With invalid data', () => {
      beforeEach(function () {
        cy.get('form.edit_skill input[name="skill[name]"]').clear()
        cy.get('form.edit_skill input[name="skill[value]"]').clear()
        cy.get('form.edit_skill select[name="skill[locale]"]').select('')
      })

      context('with empty form', () => {
        beforeEach(function () {
          cy.get('form.edit_skill input[name="skill[value]"]').clear()
          cy.get('form.edit_skill input[value="Update"]').click({force: true})
        })

        it('shows the form', () => {
          cy.get('form.edit_skill').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('.alert').should('have.text', 'Please review the problems below:')
        })

        it('shows failure message for name', () => {
          cy.get('div.skill_name .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for value', () => {
          cy.get('div.skill_value .invalid-feedback').should('be.visible')
        })

        it('shows failure message for locale', () => {
          cy.get('div.skill_locale .invalid-feedback').should('be.visible')
        })
      })

      context('with some required fields filled', () => {
        beforeEach(function () {
          cy.get('form.edit_skill input[name="skill[name]"]').clear().type('Software Engineer')
          cy.get('form.edit_skill input[name="skill[value]"]').clear()
          cy.get('form.edit_skill input[value="Update"]').click({force: true})
        })

        it('shows the form', () => {
          cy.get('form.edit_skill').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('.alert').should('have.text', 'Please review the problems below:')
        })

        it('shows failure message for name', () => {
          cy.get('div.skill_name .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for value', () => {
          cy.get('div.skill_value .invalid-feedback').should('be.visible')
        })

        it('shows failure message for locale', () => {
          cy.get('div.skill_locale .invalid-feedback').should('be.visible')
        })
      })
    })

    context('With valid data', () => {
      beforeEach(function () {
        cy.get('form.edit_skill input[name="skill[name]"]').clear().type('Software Engineer')
        cy.get('form.edit_skill input[name="skill[value]"]').clear().type(90)
        cy.get('form.edit_skill select[name="skill[locale]"]').select('en')
        cy.get('form.edit_skill input[value="Update"]').click({force: true})
      })

      it('edits the information', () => {
        cy.get('.list-group-item h5').should('have.text', 'Software Engineer')
      })

      it('shows confirmation message', () => {
        cy.get('.alert').should('have.text', 'Interest was successfully updated.')
      })
    })
  })

  describe('Delete', () => {
    beforeEach(() => {
      cy.appScenario('skill/delete')
      cy.visit('/admin')
      cy.contains('.sidebar a', 'Interests').click({force: true})
      cy.contains('.btn-danger', 'Delete').click({force: true})
    })

    it('is empty', () => {
      cy.get('main .row .item').should('not.exist')
    })

    it('shows confirmation message', () => {
      cy.get('.alert').should('have.text', 'Interest was successfully deleted.')
    })
  })
})
