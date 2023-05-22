Cypress.Commands.add('login', (email = 'email@example.com', password = 'password2018') => {
  cy.session({email, password}, () => {
    cy.request({
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
})

Cypress.Commands.add('logout', () => {
  Cypress.session.clearAllSavedSessions()
  return cy.request({
    method: 'DELETE',
    url: '/admin/logout',
  })
})

Cypress.Commands.add('fileUpload', (fileName, fileType = ' ', selector) => {
  return cy.get(selector).then(subject => {
    cy.fixture(fileName, 'base64')
      .then(Cypress.Blob.base64StringToBlob)
      .then(blob => {
        const el = subject[0]
        const testFile = new File([blob], fileName, {
          type: fileType
        })
        const dataTransfer = new DataTransfer()
        dataTransfer.items.add(testFile)
        el.files = dataTransfer.files
      })
  })
})
