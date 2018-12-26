Cypress.Commands.add('login', (email = 'email@example.com', password = 'password2018') => {
  return cy.request({
    method: 'POST',
    url: '/admin/login',
    body: {
      user: {
        email: email,
        password: password
      }
    }
  })
})

Cypress.Commands.add('logout', () => {
  return cy.request({
    method: 'DELETE',
    url: '/admin/logout',
  })
})

Cypress.Commands.add('setSessionCookies', () => {
  Cypress.Cookies.preserveOnce('_gmmcal_session')
})
