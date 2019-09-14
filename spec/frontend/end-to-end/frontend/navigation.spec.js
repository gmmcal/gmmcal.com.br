/// <reference types="Cypress" />

describe('Navigation', () => {
  context('main', () => {
    context('english', () => {
      before(() => {
        cy.visit('/')
      })

      context('Home', () => {
        beforeEach(() => {
          cy.get('.navbar-nav').contains('Contact').click()
          cy.get('.navbar-nav').contains('Home').click()
          cy.wait(100)
        })

        it('shows section', () => {
          cy.get('#home').should('be.visible')
        })

        it('activate menu', () => {
          cy.get('.navbar-nav').contains('Home').parent().should('have.class', 'active')
        })

        it('changes url', () => {
          cy.location('hash').should('eq', '#home')
        })
      })

      context('About', () => {
        beforeEach(() => {
          cy.get('.navbar-nav').contains('About').click()
          cy.wait(100)
        })

        it('shows section', () => {
          cy.get('#about').should('be.visible')
        })

        it('activate menu', () => {
          cy.get('.navbar-nav').contains('About').parent().should('have.class', 'active')
        })

        it('changes url', () => {
          cy.location('hash').should('eq', '#about')
        })
      })

      context('Experience', () => {
        beforeEach(() => {
          cy.get('.navbar-nav').contains('Experience').click()
          cy.wait(100)
        })

        it('shows section', () => {
          cy.get('#experience').should('be.visible')
        })

        it('activate menu', () => {
          cy.get('.navbar-nav').contains('Experience').parent().should('have.class', 'active')
        })

        it('changes url', () => {
          cy.location('hash').should('eq', '#experience')
        })
      })

      context('Skills', () => {
        beforeEach(() => {
          cy.get('.navbar-nav').contains('Skills').click()
          cy.wait(100)
        })

        it('shows section', () => {
          cy.get('#skills').should('be.visible')
        })

        it('activate menu', () => {
          cy.get('.navbar-nav').contains('Skills').parent().should('have.class', 'active')
        })

        it('changes url', () => {
          cy.location('hash').should('eq', '#skills')
        })
      })

      context('Education', () => {
        beforeEach(() => {
          cy.get('.navbar-nav').contains('Education').click()
          cy.wait(100)
        })

        it('shows section', () => {
          cy.get('#education').should('be.visible')
        })

        it('activate menu', () => {
          cy.get('.navbar-nav').contains('Education').parent().should('have.class', 'active')
        })

        it('changes url', () => {
          cy.location('hash').should('eq', '#education')
        })
      })

      context('Contact', () => {
        beforeEach(() => {
          cy.get('.navbar-nav').contains('Contact').click()
          cy.wait(100)
        })

        it('shows section', () => {
          cy.get('#contact').should('be.visible')
        })

        it('changes url', () => {
          cy.location('hash').should('eq', '#contact')
        })
      })
    })

    context('portuguese', () => {
      before(() => {
        cy.visit('/pt-BR')
      })

      context('Home', () => {
        beforeEach(() => {
          cy.get('.navbar-nav').contains('Contato').click()
          cy.get('.navbar-nav').contains('Home').click()
          cy.wait(100)
        })

        it('shows section', () => {
          cy.get('#home').should('be.visible')
        })

        it('activate menu', () => {
          cy.get('.navbar-nav').contains('Home').parent().should('have.class', 'active')
        })

        it('changes url', () => {
          cy.location('hash').should('eq', '#home')
        })
      })

      context('About', () => {
        beforeEach(() => {
          cy.get('.navbar-nav').contains('Sobre').click()
          cy.wait(100)
        })

        it('shows section', () => {
          cy.get('#about').should('be.visible')
        })

        it('activate menu', () => {
          cy.get('.navbar-nav').contains('Sobre').parent().should('have.class', 'active')
        })

        it('changes url', () => {
          cy.location('hash').should('eq', '#about')
        })
      })

      context('Experience', () => {
        beforeEach(() => {
          cy.get('.navbar-nav').contains('Experiência').click()
          cy.wait(100)
        })

        it('shows section', () => {
          cy.get('#experience').should('be.visible')
        })

        it('activate menu', () => {
          cy.get('.navbar-nav').contains('Experiência').parent().should('have.class', 'active')
        })

        it('changes url', () => {
          cy.location('hash').should('eq', '#experience')
        })
      })

      context('Skills', () => {
        beforeEach(() => {
          cy.get('.navbar-nav').contains('Habilidades').click()
          cy.wait(100)
        })

        it('shows section', () => {
          cy.get('#skills').should('be.visible')
        })

        it('activate menu', () => {
          cy.get('.navbar-nav').contains('Habilidades').parent().should('have.class', 'active')
        })

        it('changes url', () => {
          cy.location('hash').should('eq', '#skills')
        })
      })

      context('Education', () => {
        beforeEach(() => {
          cy.get('.navbar-nav').contains('Educação').click()
          cy.wait(100)
        })

        it('shows section', () => {
          cy.get('#education').should('be.visible')
        })

        it('activate menu', () => {
          cy.get('.navbar-nav').contains('Educação').parent().should('have.class', 'active')
        })

        it('changes url', () => {
          cy.location('hash').should('eq', '#education')
        })
      })

      context('Contact', () => {
        beforeEach(() => {
          cy.get('.navbar-nav').contains('Contato').click()
          cy.wait(100)
        })

        it('shows section', () => {
          cy.get('#contact').should('be.visible')
        })

        it('changes url', () => {
          cy.location('hash').should('eq', '#contact')
        })
      })
    })
  })

  context('i18n', () => {
    context('english', () => {
      before(() => {
        cy.visit('/en')
      })

      it('contains brazilian flag', () => {
        cy.get('.flag').should('have.class', 'pt-br')
          .and('have.attr', 'href')
          .and('include', 'pt-BR')
      })

      it('only shows one flag', () => {
        cy.get('.flag').should('have.length', 1)
      })

      it('change language', () => {
        cy.get('.flag').click()
        cy.get('.flag').should('have.class', 'en')
      })
    })

    context('portuguese', () => {
      before(() => {
        cy.visit('/pt-BR')
      })

      it('contains english flag', () => {
        cy.get('.flag').should('have.class', 'en')
          .and('have.attr', 'href')
          .and('include', 'en')
      })

      it('only shows one flag', () => {
        cy.get('.flag').should('have.length', 1)
      })

      it('change language', () => {
        cy.get('.flag').click()
        cy.get('.flag').should('have.class', 'pt-br')
      })
    })
  })
})
