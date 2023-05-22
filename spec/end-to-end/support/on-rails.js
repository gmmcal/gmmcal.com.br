Cypress.Commands.add('appCommands', function (body) {
  cy.log('APP: ' + JSON.stringify(body))
  return cy.request({
    method: 'POST',
    url: '/__cypress__/command',
    body: JSON.stringify(body),
    log: true,
    failOnStatusCode: true
  }).then((response) => {
    return response.body
  })
})

Cypress.Commands.add('app', function (name, command_options) {
  return cy.appCommands({name: name, options: command_options}).then((body) => {
    return body[0]
  })
})

Cypress.Commands.add('appScenario', function (name, options = {}) {
  return cy.app('scenarios/' + name, options)
})
