/// <reference types="Cypress" />

describe('Work Experience', () => {
  before(() => {
    cy.login()
  })

  beforeEach(function () {
    cy.setSessionCookies()
  })

  after(() => {
    cy.logout()
  })

  describe('List', () => {
    before(() => {
      cy.exec('bundle exec rails \'db:seed:test[work_experience,2]\'')
      cy.visit('/admin')
      cy.contains('.sidebar a', 'Work Experiences').click({force: true})
    })

    it('shows the current content', () => {
      cy.get('.list-group-item').should('be.visible')
    })

    it('has 2 items', () => {
      cy.get('.list-group-item').should('have.length', 2)
    })
  })

  describe('Create', () => {
    before(() => {
      cy.exec('bundle exec rails db:clean')
      cy.visit('/admin')
      cy.contains('.sidebar a', 'Work Experiences').click({force: true})
      cy.contains('a.btn', 'New').click({force: true})
    })

    context('With invalid data', () => {
      context('with empty form', () => {
        before(function () {
          // cy.get('input[name="work_experience[value]"]').clear()
          cy.get('input[value="Save"]').click({force: true})
        })

        it('shows the form', () => {
          cy.get('form.new_work_experience').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('.alert').should('have.text', 'Please review the problems below:')
        })

        it('shows failure message for company_name', () => {
          cy.get('div.work_experience_company_name .invalid-feedback').should('be.visible')
        })

        it('shows failure message for position', () => {
          cy.get('div.work_experience_position .invalid-feedback').should('be.visible')
        })

        it('shows failure message for city', () => {
          cy.get('div.work_experience_city .invalid-feedback').should('be.visible')
        })

        it('shows failure message for country', () => {
          cy.get('div.work_experience_country .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for start_date', () => {
          cy.get('div.work_experience_start_date .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for end_date', () => {
          cy.get('div.work_experience_end_date .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for description', () => {
          cy.get('div.work_experience_description .invalid-feedback').should('not.exist')
        })

        it('shows failure message for locale', () => {
          cy.get('div.work_experience_locale .invalid-feedback').should('be.visible')
        })
      })

      context('with some required fields filled', () => {
        before(function () {
          cy.get('input[name="work_experience[company_name]"]').clear().type('Name of company')
          cy.get('input[value="Save"]').click({force: true})
        })

        it('shows the form', () => {
          cy.get('form.new_work_experience').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('.alert').should('have.text', 'Please review the problems below:')
        })

        it('shows failure message for company_name', () => {
          cy.get('div.work_experience_company_name .invalid-feedback').should('not.exist')
        })

        it('shows failure message for position', () => {
          cy.get('div.work_experience_position .invalid-feedback').should('be.visible')
        })

        it('shows failure message for city', () => {
          cy.get('div.work_experience_city .invalid-feedback').should('be.visible')
        })

        it('shows failure message for country', () => {
          cy.get('div.work_experience_country .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for start_date', () => {
          cy.get('div.work_experience_start_date .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for end_date', () => {
          cy.get('div.work_experience_end_date .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for description', () => {
          cy.get('div.work_experience_description .invalid-feedback').should('not.exist')
        })

        it('shows failure message for locale', () => {
          cy.get('div.work_experience_locale .invalid-feedback').should('be.visible')
        })
      })
    })

    context('With valid data', () => {
      before(() => {
        cy.get('input[name="work_experience[company_name]"]').clear().type('Name of company')
        cy.get('input[name="work_experience[position]"]').clear().type('Programmer')
        cy.get('input[name="work_experience[city]"]').clear().type('Maceió')
        cy.get('select[name="work_experience[country]"]').select('BR')
        cy.get('select[name="work_experience[start_date(1i)]"]').select('2018')
        cy.get('select[name="work_experience[start_date(2i)]"]').select('1')
        cy.get('select[name="work_experience[start_date(3i)]"]').select('1')
        cy.get('select[name="work_experience[locale]"]').select('en')
        cy.get('input[value="Save"]').click({force: true})
      })

      it('is successful', () => {
        cy.get('.list-group-item h5').should('have.text', 'Name of company')
      })

      it('shows confirmation message', () => {
        cy.get('.alert').should('have.text', 'Work Experience was successfully created.')
      })
    })
  })

  describe('Edit', () => {
    before(() => {
      cy.exec('bundle exec rails \'db:seed:test[work_experience,1]\'')
      cy.visit('/admin')
      cy.contains('.sidebar a', 'Work Experiences').click({force: true})
      cy.contains('.btn-outline-primary', 'Edit').click({force: true})
    })

    context('With invalid data', () => {
      context('with empty form', () => {
        before(function () {
          cy.get('input[name="work_experience[company_name]"]').clear()
          cy.get('input[name="work_experience[position]"]').clear()
          cy.get('input[name="work_experience[city]"]').clear()
          cy.get('select[name="work_experience[country]"]').select('')
          cy.get('select[name="work_experience[start_date(1i)]"]').select('')
          cy.get('select[name="work_experience[start_date(2i)]"]').select('')
          cy.get('select[name="work_experience[start_date(3i)]"]').select('')
          cy.get('textarea[name="work_experience[description]"]').clear()
          cy.get('select[name="work_experience[locale]"]').select('')
          cy.get('input[value="Update"]').click({force: true})
        })

        it('shows the form', () => {
          cy.get('form.edit_work_experience').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('.alert').should('have.text', 'Please review the problems below:')
        })

        it('shows failure message for company_name', () => {
          cy.get('div.work_experience_company_name .invalid-feedback').should('be.visible')
        })

        it('shows failure message for position', () => {
          cy.get('div.work_experience_position .invalid-feedback').should('be.visible')
        })

        it('shows failure message for city', () => {
          cy.get('div.work_experience_city .invalid-feedback').should('be.visible')
        })

        it('shows failure message for country', () => {
          cy.get('div.work_experience_country .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for start_date', () => {
          cy.get('div.work_experience_start_date .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for end_date', () => {
          cy.get('div.work_experience_end_date .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for description', () => {
          cy.get('div.work_experience_description .invalid-feedback').should('not.exist')
        })

        it('shows failure message for locale', () => {
          cy.get('div.work_experience_locale .invalid-feedback').should('be.visible')
        })
      })

      context('with some required fields filled', () => {
        before(function () {
          cy.get('input[name="work_experience[company_name]"]').clear().type('Name of company')
          cy.get('input[value="Update"]').click({force: true})
        })

        it('shows the form', () => {
          cy.get('form.edit_work_experience').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('.alert').should('have.text', 'Please review the problems below:')
        })

        it('shows failure message for company_name', () => {
          cy.get('div.work_experience_company_name .invalid-feedback').should('not.exist')
        })

        it('shows failure message for position', () => {
          cy.get('div.work_experience_position .invalid-feedback').should('be.visible')
        })

        it('shows failure message for city', () => {
          cy.get('div.work_experience_city .invalid-feedback').should('be.visible')
        })

        it('shows failure message for country', () => {
          cy.get('div.work_experience_country .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for start_date', () => {
          cy.get('div.work_experience_start_date .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for end_date', () => {
          cy.get('div.work_experience_end_date .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for description', () => {
          cy.get('div.work_experience_description .invalid-feedback').should('not.exist')
        })

        it('shows failure message for locale', () => {
          cy.get('div.work_experience_locale .invalid-feedback').should('be.visible')
        })
      })
    })

    context('With valid data', () => {
      before(function () {
        cy.get('input[name="work_experience[company_name]"]').clear().type('Amazing company')
        cy.get('input[name="work_experience[position]"]').clear().type('Programmer')
        cy.get('input[name="work_experience[city]"]').clear().type('Maceió')
        cy.get('select[name="work_experience[country]"]').select('BR')
        cy.get('select[name="work_experience[start_date(1i)]"]').select('2018')
        cy.get('select[name="work_experience[start_date(2i)]"]').select('1')
        cy.get('select[name="work_experience[start_date(3i)]"]').select('1')
        cy.get('select[name="work_experience[locale]"]').select('en')
        cy.get('input[value="Update"]').click({force: true})
      })

      it('edits the information', () => {
        cy.get('.list-group-item h5').should('have.text', 'Amazing company')
      })

      it('shows confirmation message', () => {
        cy.get('.alert').should('have.text', 'Work Experience was successfully updated.')
      })
    })
  })

  describe('Delete', () => {
    before(() => {
      cy.exec('bundle exec rails \'db:seed:test[work_experience,1]\'')
      cy.visit('/admin')
      cy.contains('.sidebar a', 'Work Experiences').click({force: true})
      cy.contains('.btn-danger', 'Delete').click({force: true})
    })

    it('is empty', () => {
      cy.get('main .row .item').should('not.exist')
    })

    it('shows confirmation message', () => {
      cy.get('.alert').should('have.text', 'Work Experience was successfully deleted.')
    })
  })
})
