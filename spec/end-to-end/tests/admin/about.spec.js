/// <reference types="Cypress" />

describe('About', () => {
  before(() => {
    cy.login()
  })

  after(() => {
    cy.logout()
  })

  describe('List', () => {
    before(() => {
      cy.appScenario('about/data')
      cy.visit('/admin')
      cy.contains('.sidebar a', 'About').click({force: true})
    })

    it('shows the current content', () => {
      cy.get('.list-group-item').should('be.visible')
    })
  })

  describe('Create', () => {
    before(() => {
      cy.app('clean')
      cy.visit('/admin')
      cy.contains('.sidebar a', 'About').click({force: true})
    })

    it('shows the form', () => {
      cy.get('form.new_about').should('be.visible')
    })

    context('With invalid data', () => {
      context('with empty form', () => {
        before(function () {
          cy.get('select[name="about[locale]"]').select('')
          cy.get('input[value="Save"]').click({force: true})
        })

        it('shows the form', () => {
          cy.get('form.new_about').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('.alert').should('have.text', 'Please review the problems below:')
        })

        it('shows failure message for job title', () => {
          cy.get('div.about_job_title .invalid-feedback').should('be.visible')
        })

        it('shows failure message for description', () => {
          cy.get('div.about_description .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for country', () => {
          cy.get('div.about_country .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for city', () => {
          cy.get('div.about_city .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for phone', () => {
          cy.get('div.about_phone_number .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for e-mail', () => {
          cy.get('div.about_email .invalid-feedback').should('not.exist')
        })

        it('shows failure message for locale', () => {
          cy.get('div.about_locale .invalid-feedback').should('be.visible')
        })
      })

      context('with some required fields filled', () => {
        before(function () {
          cy.get('input[name="about[job_title]"]').clear().type('Some title at some company')
          cy.get('select[name="about[locale]"]').select('en')
          cy.get('input[value="Save"]').click({force: true})
        })

        it('shows the form', () => {
          cy.get('form.new_about').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('.alert').should('have.text', 'Please review the problems below:')
        })

        it('do not show failure message for job title', () => {
          cy.get('div.about_job_title .invalid-feedback').should('not.exist')
        })

        it('shows failure message for description', () => {
          cy.get('div.about_description .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for country', () => {
          cy.get('div.about_country .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for city', () => {
          cy.get('div.about_city .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for phone', () => {
          cy.get('div.about_phone_number .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for e-mail', () => {
          cy.get('div.about_email .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for locale', () => {
          cy.get('div.about_locale .invalid-feedback').should('not.exist')
        })
      })
    })

    context('With valid data', () => {
      before(function () {
        cy.get('input[name="about[job_title]"]').clear().type('Some title at some company')
        cy.get('textarea[name="about[description]"]').clear().type('Lorem ipsum nulus dolor.')
        cy.get('select[name="about[locale]"]').select('en')
        cy.get('input[value="Save"]').click({ force: true })
      })

      it('is successful', () => {
        cy.get('.list-group-item h5').should('have.text', 'Some title at some company')
      })

      it('shows confirmation message', () => {
        cy.get('.alert').should('have.text', 'About was successfully created.')
      })

      it('has a download button', () => {
        cy.contains('.list-group-item', 'Download CV').should('be.visible')
      })
    })
  })

  describe('Edit', () => {
    before(() => {
      cy.appScenario('about/data')
      cy.visit('/admin')
      cy.contains('.sidebar a', 'About').click({force: true})
      cy.contains('.btn-outline-primary', 'Edit').click({force: true})
    })

    context('With invalid data', () => {
      context('with empty form', () => {
        before(function () {
          cy.get('input[name="about[job_title]"]').clear()
          cy.get('textarea[name="about[description]"]').clear()
          cy.get('select[name="about[country]"]').select('')
          cy.get('input[name="about[city]"]').clear()
          cy.get('input[name="about[phone_number]"]').clear()
          cy.get('input[name="about[email]"]').clear()
          cy.get('select[name="about[locale]"]').select('')
          cy.get('input[value="Update"]').click({force: true})
        })

        it('shows the form', () => {
          cy.get('form.edit_about').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('.alert').should('have.text', 'Please review the problems below:')
        })

        it('shows failure message for job title', () => {
          cy.get('div.about_job_title .invalid-feedback').should('be.visible')
        })

        it('shows failure message for description', () => {
          cy.get('div.about_description .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for country', () => {
          cy.get('div.about_country .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for city', () => {
          cy.get('div.about_city .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for phone', () => {
          cy.get('div.about_phone_number .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for e-mail', () => {
          cy.get('div.about_email .invalid-feedback').should('not.exist')
        })

        it('shows failure message for locale', () => {
          cy.get('div.about_locale .invalid-feedback').should('be.visible')
        })
      })

      context('with some required fields filled', () => {
        before(function () {
          cy.get('input[name="about[job_title]"]').clear().type('Some title at some company')
          cy.get('select[name="about[locale]"]').select('en')
          cy.get('input[value="Update"]').click({force: true})
        })

        it('shows the form', () => {
          cy.get('form.edit_about').should('be.visible')
        })

        it('shows error message', () => {
          cy.get('.alert').should('have.text', 'Please review the problems below:')
        })

        it('do not show failure message for job title', () => {
          cy.get('div.about_job_title .invalid-feedback').should('not.exist')
        })

        it('shows failure message for description', () => {
          cy.get('div.about_description .invalid-feedback').should('be.visible')
        })

        it('do not show failure message for country', () => {
          cy.get('div.about_country .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for city', () => {
          cy.get('div.about_city .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for phone', () => {
          cy.get('div.about_phone_number .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for e-mail', () => {
          cy.get('div.about_email .invalid-feedback').should('not.exist')
        })

        it('do not show failure message for locale', () => {
          cy.get('div.about_locale .invalid-feedback').should('not.exist')
        })
      })
    })

    context('With valid data', () => {
      before(function () {
        cy.get('input[name="about[job_title]"]').clear().type('Some title at some company')
        cy.get('textarea[name="about[description]"]').clear().type('Lorem ipsum nulus dolor.')
        cy.get('select[name="about[locale]"]').select('en')
        cy.get('input[value="Update"]').click({force: true})
      })

      it('edits the information', () => {
        cy.get('.list-group-item h5').should('have.text', 'Some title at some company')
      })

      it('shows confirmation message', () => {
        cy.get('.alert').should('have.text', 'About was successfully updated.')
      })
    })
  })

  describe('Download CV', () => {
    before(() => {
      cy.appScenario('about/data')
      cy.visit('/admin')
      cy.contains('.sidebar a', 'About').click({force: true})
    })

    it('has a download button', () => {
      cy.contains('.list-group-item', 'Download CV').should('be.visible')
    })
  })
})
