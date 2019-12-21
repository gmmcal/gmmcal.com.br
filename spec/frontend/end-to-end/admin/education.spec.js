/// <reference types="Cypress" />

describe('Education', () => {
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
      cy.exec('bundle exec rails \'db:seed:test[education,2]\'')
      cy.visit('/admin')
      cy.contains('.sidebar a', 'Educations').click({force: true})
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
      cy.contains('.sidebar a', 'Educations').click({force: true})
      cy.contains('a.btn', 'New').click({force: true})
    })

    context('With invalid data', () => {
      context('with empty form', () => {
        before(function () {
          cy.get('select[name="education[start_date(1i)]"]').select('')
          cy.get('select[name="education[start_date(2i)]"]').select('')
          cy.get('select[name="education[start_date(3i)]"]').select('')
          cy.get('select[name="education[end_date(1i)]"]').select('')
          cy.get('select[name="education[end_date(2i)]"]').select('')
          cy.get('select[name="education[end_date(3i)]"]').select('')
          cy.get('input[value="Save"]').click({force: true})
        })

        it('shows the form', () => {
          cy.get('form.new_education').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('.alert').should('have.text', 'Please review the problems below:')
        })

        it('shows failure message for course', () => {
          cy.get('div.education_course .invalid-feedback').should('be.visible')
        })

        it('shows failure message for institution', () => {
          cy.get('div.education_institution .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for description', () => {
          cy.get('div.education_description .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for start_date', () => {
          cy.get('div.education_start_date .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for end_date', () => {
          cy.get('div.education_end_date .invalid-feedback').should('not.exist')
        })

        it('shows failure message for locale', () => {
          cy.get('div.education_locale .invalid-feedback').should('be.visible')
        })
      })

      context('with some required fields filled', () => {
        before(function () {
          cy.get('input[name="education[course]"]').clear().type('Some title at some company')
          cy.get('input[value="Save"]').click({force: true})
        })

        it('shows the form', () => {
          cy.get('form.new_education').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('.alert').should('have.text', 'Please review the problems below:')
        })

        it('shows failure message for course', () => {
          cy.get('div.education_course .invalid-feedback').should('not.exist')
        })

        it('shows failure message for institution', () => {
          cy.get('div.education_institution .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for description', () => {
          cy.get('div.education_description .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for start_date', () => {
          cy.get('div.education_start_date .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for end_date', () => {
          cy.get('div.education_end_date .invalid-feedback').should('not.exist')
        })

        it('shows failure message for locale', () => {
          cy.get('div.education_locale .invalid-feedback').should('be.visible')
        })
      })
    })

    context('With valid data', () => {
      before(() => {
        cy.get('input[name="education[course]"]').clear().type('Some title at some company')
        cy.get('input[name="education[institution]"]').clear().type('Some title at some company')
        cy.get('select[name="education[start_date(1i)]"]').select('2018')
        cy.get('select[name="education[start_date(2i)]"]').select('1')
        cy.get('select[name="education[start_date(3i)]"]').select('1')
        cy.get('select[name="education[locale]"]').select('en')
        cy.get('input[value="Save"]').click({force: true})
      })

      it('is successful', () => {
        cy.get('.list-group-item h5').should('have.text', 'Some title at some company')
      })

      it('shows confirmation message', () => {
        cy.get('.alert').should('have.text', 'Education was successfully created.')
      })
    })
  })

  describe('Edit', () => {
    before(() => {
      cy.exec('bundle exec rails \'db:seed:test[education,1]\'')
      cy.visit('/admin')
      cy.contains('.sidebar a', 'Educations').click({force: true})
      cy.contains('.btn-outline-primary', 'Edit').click({force: true})
    })

    context('With invalid data', () => {
      context('with empty form', () => {
        before(function () {
          cy.get('input[name="education[course]"]').clear()
          cy.get('input[name="education[institution]"]').clear()
          cy.get('textarea[name="education[description]"]').clear()
          cy.get('select[name="education[start_date(1i)]"]').select('')
          cy.get('select[name="education[start_date(2i)]"]').select('')
          cy.get('select[name="education[start_date(3i)]"]').select('')
          cy.get('select[name="education[end_date(1i)]"]').select('')
          cy.get('select[name="education[end_date(2i)]"]').select('')
          cy.get('select[name="education[end_date(3i)]"]').select('')
          cy.get('select[name="education[locale]"]').select('')
          cy.get('input[value="Update"]').click({force: true})
        })

        it('shows the form', () => {
          cy.get('form.edit_education').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('.alert').should('have.text', 'Please review the problems below:')
        })

        it('shows failure message for course', () => {
          cy.get('div.education_course .invalid-feedback').should('be.visible')
        })

        it('shows failure message for institution', () => {
          cy.get('div.education_institution .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for description', () => {
          cy.get('div.education_description .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for start_date', () => {
          cy.get('div.education_start_date .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for end_date', () => {
          cy.get('div.education_end_date .invalid-feedback').should('not.exist')
        })

        it('shows failure message for locale', () => {
          cy.get('div.education_locale .invalid-feedback').should('be.visible')
        })
      })

      context('with some required fields filled', () => {
        before(function () {
          cy.get('input[name="education[course]"]').clear().type('Some title at some company')
          cy.get('input[value="Update"]').click({force: true})
        })

        it('shows the form', () => {
          cy.get('form.edit_education').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('.alert').should('have.text', 'Please review the problems below:')
        })

        it('shows failure message for course', () => {
          cy.get('div.education_course .invalid-feedback').should('not.exist')
        })

        it('shows failure message for institution', () => {
          cy.get('div.education_institution .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for description', () => {
          cy.get('div.education_description .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for start_date', () => {
          cy.get('div.education_start_date .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for end_date', () => {
          cy.get('div.education_end_date .invalid-feedback').should('not.exist')
        })

        it('shows failure message for locale', () => {
          cy.get('div.education_locale .invalid-feedback').should('be.visible')
        })
      })
    })

    context('With valid data', () => {
      before(function () {
        cy.get('input[name="education[course]"]').clear().type('Software Engineer')
        cy.get('input[name="education[institution]"]').clear().type('Some title at some company')
        cy.get('select[name="education[start_date(1i)]"]').select('2018')
        cy.get('select[name="education[start_date(2i)]"]').select('1')
        cy.get('select[name="education[start_date(3i)]"]').select('1')
        cy.get('select[name="education[locale]"]').select('en')
        cy.get('input[value="Update"]').click({force: true})
      })

      it('edits the information', () => {
        cy.get('.list-group-item h5').should('have.text', 'Software Engineer')
      })

      it('shows confirmation message', () => {
        cy.get('.alert').should('have.text', 'Education was successfully updated.')
      })
    })
  })

  describe('Delete', () => {
    before(() => {
      cy.exec('bundle exec rails \'db:seed:test[education,1]\'')
      cy.visit('/admin')
      cy.contains('.sidebar a', 'Educations').click({force: true})
      cy.contains('.btn-danger', 'Delete').click({force: true})
    })

    it('is empty', () => {
      cy.get('main .row .item').should('not.exist')
    })

    it('shows confirmation message', () => {
      cy.get('.alert').should('have.text', 'Education was successfully deleted.')
    })
  })
})
