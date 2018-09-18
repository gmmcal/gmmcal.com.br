/// <reference types="Cypress" />

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
