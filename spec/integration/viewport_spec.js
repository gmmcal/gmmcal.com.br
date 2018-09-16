/// <reference types="Cypress" />

describe('Viewports', () => {
  beforeEach(() => {
    cy.visit('/')
  })

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
