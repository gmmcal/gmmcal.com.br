/// <reference types="Cypress" />

describe('Integration', () => {
  before(() => {
    cy.visit('/')
  })

  describe('Content', () => {
    context('Header', () => {
      it('section exists', () => {
        cy.get('header').should('have.length', 1)
      })

      it('has a banner image', () => {
        cy.get('header img').should('have.attr', 'src')
      })

      it('has a title', () => {
        cy.get('header h1').should('contain', 'Gustavo Cunha')
      })

      it('has a subtitle', () => {
        cy.get('header h2').should('contain', 'Web developer, Mobile and Software Engineer Consultant')
      })
    })

    context('About', () => {
      it('section exists', () => {
        cy.get('#about').should('have.length', 1)
      })

      context('heading', () => {
        it('has a title', () => {
          cy.get('#about .heading h2').should('have.length', 1)
        })
      })

      context('body', () => {
        it('has a title', () => {
          cy.get('#about h3').should('contain', 'Gustavo Cunha')
        })

        it('has a description block', () => {
          cy.get('#about .description').should('have.length', 1)
        })

        it('has a cv link', () => {
          cy.get('#about .btn-download').should('have.length', 1)
        })

        it('has an image', () => {
          cy.get('#about img').should('have.class', 'topmar').and('have.attr', 'src')
        })
      })
    })

    context('Experience', () => {
      it('section exists', () => {
        cy.get('#experience').should('have.length', 1)
      })

      context('heading', () => {
        it('has a title', () => {
          cy.get('#experience .heading h2').should('have.length', 1)
        })

        it('has a hero', () => {
          cy.get('#experience .heading p').should('have.length', 1)
        })
      })

      context('body', () => {
        it('contains 5 experiences', () => {
          cy.get('#experience .work-details').should('have.length', 5)
        })
      })
    })

    context('Skills', () => {
      it('section exists', () => {
        cy.get('#skills').should('have.length', 1)
      })

      context('heading', () => {
        it('has a title', () => {
          cy.get('#skills .heading h2').should('have.length', 1)
        })

        it('has a hero', () => {
          cy.get('#skills .heading p').should('have.length', 1)
        })
      })

      context('body', () => {
        it('contains 6 skills', () => {
          cy.get('#skills .skills').should('have.length', 6)
        })
      })
    })

    context('Education', () => {
      it('section exists', () => {
        cy.get('#education').should('have.length', 1)
      })

      context('heading', () => {
        it('has a title', () => {
          cy.get('#education .heading h2').should('have.length', 1)
        })

        it('has a hero', () => {
          cy.get('#education .heading p').should('have.length', 1)
        })
      })

      context('body', () => {
        it('contains 2 schools', () => {
          cy.get('#education .education-details').should('have.length', 2)
        })
      })
    })

    context('Contact', () => {
      it('section exists', () => {
        cy.get('#contact').should('have.length', 1)
      })

      context('heading', () => {
        it('has a title', () => {
          cy.get('#contact .heading h2').should('have.length', 1)
        })

        it('has a hero', () => {
          cy.get('#contact .heading p').should('have.length', 1)
        })
      })

      context('body', () => {
        it('has a city/country', () => {
          cy.get('#contact .location').should('have.length', 1)
        })

        it('has a phone number', () => {
          cy.get('#contact .phone_number').should('have.length', 1)
        })

        it('has a email', () => {
          cy.get('#contact .email').should('have.length', 1)
        })

        it('has a github', () => {
          cy.get('#contact .github').should('have.length', 1)
        })

        it('has a linkedin', () => {
          cy.get('#contact .linkedin').should('have.length', 1)
        })

        it('has a twitter', () => {
          cy.get('#contact .twitter').should('have.length', 1)
        })
      })
    })

    context('Footer', () => {
      it('section exists', () => {
        cy.get('#footer').should('have.length', 1)
      })

      it('contains github link', () => {
        cy.get('#footer svg[data-icon="github"]').should('have.length', 1)
      })

      it('contains linkedin link', () => {
        cy.get('#footer svg[data-icon="linkedin-in"]').should('have.length', 1)
      })

      it('contains twitter link', () => {
        cy.get('#footer svg[data-icon="twitter"]').should('have.length', 1)
      })
    })
  })

  describe('Navigation', () => {
    context('main', () => {
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

  describe('Viewports', () => {
    context('desktop', () => {
      context('huge desktop', () => {
        beforeEach(() => {
          cy.viewport(2999, 2999)
        })

        it('toggle button should be hidden', () => {
          cy.get('.navbar-toggler').should('not.be.visible')
        })

        it('menu should be visible', () => {
          cy.get('.navbar .menu-container').should('be.visible')
        })
      })

      context('macbook 15 inches', () => {
        beforeEach(() => {
          cy.viewport('macbook-15')
        })

        it('toggle button should be hidden', () => {
          cy.get('.navbar-toggler').should('not.be.visible')
        })

        it('menu should be visible', () => {
          cy.get('.navbar .menu-container').should('be.visible')
        })
      })

      context('macbook 13 inches', () => {
        beforeEach(() => {
          cy.viewport('macbook-13')
        })

        it('toggle button should be hidden', () => {
          cy.get('.navbar-toggler').should('not.be.visible')
        })

        it('menu should be visible', () => {
          cy.get('.navbar .menu-container').should('be.visible')
        })
      })

      context('macbook 11 inches', () => {
        beforeEach(() => {
          cy.viewport('macbook-11')
        })

        it('toggle button should be hidden', () => {
          cy.get('.navbar-toggler').should('not.be.visible')
        })

        it('menu should be visible', () => {
          cy.get('.navbar .menu-container').should('be.visible')
        })
      })
    })

    context('tablets', () => {
      context('portrait', () => {
        context('ipad-2', () => {
          beforeEach(() => {
            cy.viewport('ipad-2', 'portrait')
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('not.be.visible')
          })

          it('menu should be visible', () => {
            cy.get('.navbar .menu-container').should('be.visible')
          })
        })

        context('ipad-mini', () => {
          beforeEach(() => {
            cy.viewport('ipad-mini', 'portrait')
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('not.be.visible')
          })

          it('menu should be visible', () => {
            cy.get('.navbar .menu-container').should('be.visible')
          })
        })

        context('1024x600', () => {
          beforeEach(() => {
            cy.viewport(600, 1024)
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('be.visible')
          })

          it('menu should not be visible', () => {
            cy.get('.navbar .menu-container').should('not.be.visible')
          })

          it('menu should be visible after click', () => {
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('be.visible')
            cy.get('.navbar-toggler').click()
          })

          it('menu should close if it is open', () => {
            cy.get('.navbar-toggler').click() // Open menu
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('not.be.visible')
          })
        })
      })

      context('landscape', () => {
        context('ipad-2', () => {
          beforeEach(() => {
            cy.viewport('ipad-2', 'landscape')
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('not.be.visible')
          })

          it('menu should be visible', () => {
            cy.get('.navbar .menu-container').should('be.visible')
          })
        })

        context('ipad-mini', () => {
          beforeEach(() => {
            cy.viewport('ipad-mini', 'landscape')
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('not.be.visible')
          })

          it('menu should be visible', () => {
            cy.get('.navbar .menu-container').should('be.visible')
          })
        })

        context('1024x600', () => {
          beforeEach(() => {
            cy.viewport(1024, 600)
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('not.be.visible')
          })

          it('menu should not be visible', () => {
            cy.get('.navbar .menu-container').should('be.visible')
          })
        })
      })
    })

    context('mobile', () => {
      context('portrait', () => {
        context('iphone-6+', () => {
          beforeEach(() => {
            cy.viewport('iphone-6+', 'portrait')
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('be.visible')
          })

          it('menu should not be visible', () => {
            cy.get('.navbar .menu-container').should('not.be.visible')
          })

          it('menu should be visible after click', () => {
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('be.visible')
            cy.get('.navbar-toggler').click()
          })

          it('menu should close if it is open', () => {
            cy.get('.navbar-toggler').click() // Open menu
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('not.be.visible')
          })
        })

        context('iphone-6', () => {
          beforeEach(() => {
            cy.viewport('iphone-6', 'portrait')
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('be.visible')
          })

          it('menu should not be visible', () => {
            cy.get('.navbar .menu-container').should('not.be.visible')
          })

          it('menu should be visible after click', () => {
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('be.visible')
            cy.get('.navbar-toggler').click()
          })

          it('menu should close if it is open', () => {
            cy.get('.navbar-toggler').click() // Open menu
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('not.be.visible')
          })
        })

        context('iphone-5', () => {
          beforeEach(() => {
            cy.viewport('iphone-5', 'portrait')
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('be.visible')
          })

          it('menu should not be visible', () => {
            cy.get('.navbar .menu-container').should('not.be.visible')
          })

          it('menu should be visible after click', () => {
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('be.visible')
            cy.get('.navbar-toggler').click()
          })

          it('menu should close if it is open', () => {
            cy.get('.navbar-toggler').click() // Open menu
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('not.be.visible')
          })
        })

        context('iphone-4', () => {
          beforeEach(() => {
            cy.viewport('iphone-4', 'portrait')
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('be.visible')
          })

          it('menu should not be visible', () => {
            cy.get('.navbar .menu-container').should('not.be.visible')
          })

          it('menu should be visible after click', () => {
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('be.visible')
            cy.get('.navbar-toggler').click()
          })

          it('menu should close if it is open', () => {
            cy.get('.navbar-toggler').click() // Open menu
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('not.be.visible')
          })
        })

        context('iphone-3', () => {
          beforeEach(() => {
            cy.viewport('iphone-3', 'portrait')
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('be.visible')
          })

          it('menu should not be visible', () => {
            cy.get('.navbar .menu-container').should('not.be.visible')
          })

          it('menu should be visible after click', () => {
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('be.visible')
            cy.get('.navbar-toggler').click()
          })

          it('menu should close if it is open', () => {
            cy.get('.navbar-toggler').click() // Open menu
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('not.be.visible')
          })
        })
      })

      context('landscape', () => {
        context('iphone-6+', () => {
          beforeEach(() => {
            cy.viewport('iphone-6+', 'landscape')
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('be.visible')
          })

          it('menu should not be visible', () => {
            cy.get('.navbar .menu-container').should('not.be.visible')
          })

          it('menu should be visible after click', () => {
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('be.visible')
            cy.get('.navbar-toggler').click()
          })

          it('menu should close if it is open', () => {
            cy.get('.navbar-toggler').click() // Open menu
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('not.be.visible')
          })
        })

        context('iphone-6', () => {
          beforeEach(() => {
            cy.viewport('iphone-6', 'landscape')
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('be.visible')
          })

          it('menu should not be visible', () => {
            cy.get('.navbar .menu-container').should('not.be.visible')
          })

          it('menu should be visible after click', () => {
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('be.visible')
            cy.get('.navbar-toggler').click()
          })

          it('menu should close if it is open', () => {
            cy.get('.navbar-toggler').click() // Open menu
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('not.be.visible')
          })
        })

        context('iphone-5', () => {
          beforeEach(() => {
            cy.viewport('iphone-5', 'landscape')
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('be.visible')
          })

          it('menu should not be visible', () => {
            cy.get('.navbar .menu-container').should('not.be.visible')
          })

          it('menu should be visible after click', () => {
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('be.visible')
            cy.get('.navbar-toggler').click()
          })

          it('menu should close if it is open', () => {
            cy.get('.navbar-toggler').click() // Open menu
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('not.be.visible')
          })
        })

        context('iphone-4', () => {
          beforeEach(() => {
            cy.viewport('iphone-4', 'landscape')
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('be.visible')
          })

          it('menu should not be visible', () => {
            cy.get('.navbar .menu-container').should('not.be.visible')
          })

          it('menu should be visible after click', () => {
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('be.visible')
            cy.get('.navbar-toggler').click()
          })

          it('menu should close if it is open', () => {
            cy.get('.navbar-toggler').click() // Open menu
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('not.be.visible')
          })
        })

        context('iphone-3', () => {
          beforeEach(() => {
            cy.viewport('iphone-3', 'landscape')
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('be.visible')
          })

          it('menu should not be visible', () => {
            cy.get('.navbar .menu-container').should('not.be.visible')
          })

          it('menu should be visible after click', () => {
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('be.visible')
            cy.get('.navbar-toggler').click()
          })

          it('menu should close if it is open', () => {
            cy.get('.navbar-toggler').click() // Open menu
            cy.get('.navbar-toggler').click()
            cy.get('.navbar .menu-container').should('not.be.visible')
          })
        })
      })
    })
  })
})
