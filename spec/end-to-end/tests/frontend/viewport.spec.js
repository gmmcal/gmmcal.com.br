/// <reference types="Cypress" />

describe('Viewports', () => {
  before(() => {
    cy.visit('/')
  })

  describe('Desktop', () => {
    context('Regular', () => {
      beforeEach(() => {
        cy.viewport(1200, 1080)
      })

      it('toggle button should be hidden', () => {
        cy.get('.navbar-toggler').should('not.be.visible')
      })

      it('menu should be visible', () => {
        cy.get('.navbar .menu-container').should('be.visible')
      })
    })

    context('Large', () => {
      beforeEach(() => {
        cy.viewport(1600, 1080)
      })

      it('toggle button should be hidden', () => {
        cy.get('.navbar-toggler').should('not.be.visible')
      })

      it('menu should be visible', () => {
        cy.get('.navbar .menu-container').should('be.visible')
      })
    })

    context('MacBook 15 inches', () => {
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

    context('MacBook 13 inches', () => {
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

    context('MacBook 11 inches', () => {
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

  describe('Tablets', () => {
    describe('Portrait', () => {
      describe('iPad', () => {
        context('Classic', () => {
          beforeEach(() => {
            cy.viewport(768, 1024)
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('not.be.visible')
          })

          it('menu should be visible', () => {
            cy.get('.navbar .menu-container').should('be.visible')
          })
        })

        context('Pro 10 inches', () => {
          beforeEach(() => {
            cy.viewport(834, 1112)
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('not.be.visible')
          })

          it('menu should be visible', () => {
            cy.get('.navbar .menu-container').should('be.visible')
          })
        })

        context('Pro 12 inches', () => {
          beforeEach(() => {
            cy.viewport(1024, 1366)
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('not.be.visible')
          })

          it('menu should be visible', () => {
            cy.get('.navbar .menu-container').should('be.visible')
          })
        })
      })

      context('Galaxy Tab', () => {
        beforeEach(() => {
          cy.viewport(800, 1280)
        })

        it('toggle button should be hidden', () => {
          cy.get('.navbar-toggler').should('not.be.visible')
        })

        it('menu should be visible', () => {
          cy.get('.navbar .menu-container').should('be.visible')
        })
      })

      context('Nexus 7', () => {
        beforeEach(() => {
          cy.viewport(601, 906)
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

    describe('Landscape', () => {
      describe('iPad', () => {
        context('Classic', () => {
          beforeEach(() => {
            cy.viewport(1024, 768)
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('not.be.visible')
          })

          it('menu should be visible', () => {
            cy.get('.navbar .menu-container').should('be.visible')
          })
        })

        context('Pro 10 inches', () => {
          beforeEach(() => {
            cy.viewport(1112, 834)
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('not.be.visible')
          })

          it('menu should be visible', () => {
            cy.get('.navbar .menu-container').should('be.visible')
          })
        })

        context('Pro 12 inches', () => {
          beforeEach(() => {
            cy.viewport(1366, 1024)
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('not.be.visible')
          })

          it('menu should not be visible', () => {
            cy.get('.navbar .menu-container').should('be.visible')
          })
        })
      })

      context('Galaxy Tab', () => {
        beforeEach(() => {
          cy.viewport(1280, 800)
        })

        it('toggle button should be hidden', () => {
          cy.get('.navbar-toggler').should('not.be.visible')
        })

        it('menu should be visible', () => {
          cy.get('.navbar .menu-container').should('be.visible')
        })
      })

      context('Nexus 7', () => {
        beforeEach(() => {
          cy.viewport(906, 601)
        })

        it('toggle button should be hidden', () => {
          cy.get('.navbar-toggler').should('not.be.visible')
        })

        it('menu should be visible', () => {
          cy.get('.navbar .menu-container').should('be.visible')
        })
      })
    })
  })

  describe('Mobile', () => {
    describe('Portrait', () => {
      describe('iPhone', () => {
        context('Classic <= 4', () => {
          beforeEach(() => {
            cy.viewport(320, 480)
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

        context('5', () => {
          beforeEach(() => {
            cy.viewport(320, 568)
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

        context('6', () => {
          beforeEach(() => {
            cy.viewport(375, 667)
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

        context('6+', () => {
          beforeEach(() => {
            cy.viewport(414, 736)
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

        context('X', () => {
          beforeEach(() => {
            cy.viewport(375, 812)
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

        context('XS', () => {
          beforeEach(() => {
            cy.viewport(375, 767)
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

        context('XS Max', () => {
          beforeEach(() => {
            cy.viewport(414, 767)
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

      context('Galaxy S', () => {
        beforeEach(() => {
          cy.viewport(320, 640)
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

      context('Windows Phone', () => {
        beforeEach(() => {
          cy.viewport(480, 800)
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

    describe('Landscape', () => {
      describe('iPhone', () => {
        context('Classic', () => {
          beforeEach(() => {
            cy.viewport(480, 320)
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

        context('5', () => {
          beforeEach(() => {
            cy.viewport(568, 320)
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

        context('6', () => {
          beforeEach(() => {
            cy.viewport(667, 375)
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

        context('6+', () => {
          beforeEach(() => {
            cy.viewport(736, 414)
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

        context('X', () => {
          beforeEach(() => {
            cy.viewport(812, 375)
          })

          it('toggle button should be hidden', () => {
            cy.get('.navbar-toggler').should('not.be.visible')
          })

          it('menu should be visible', () => {
            cy.get('.navbar .menu-container').should('be.visible')
          })
        })

        context('XS', () => {
          beforeEach(() => {
            cy.viewport(767, 375)
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

        context('XS Max', () => {
          beforeEach(() => {
            cy.viewport(767, 414)
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

      context('Galaxy S', () => {
        beforeEach(() => {
          cy.viewport(640, 320)
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

      context('Windows Phone', () => {
        beforeEach(() => {
          cy.viewport(800, 480)
        })

        it('toggle button should be hidden', () => {
          cy.get('.navbar-toggler').should('not.be.visible')
        })

        it('menu should be visible', () => {
          cy.get('.navbar .menu-container').should('be.visible')
        })
      })
    })
  })
})
