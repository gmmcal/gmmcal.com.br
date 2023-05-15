const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '88eqvw',
  fixturesFolder: 'spec/assets',
  screenshotsFolder: 'spec/end-to-end/screenshots',
  video: false,
  includeShadowDom: true,
  viewportWidth: 1980,
  viewportHeight: 1024,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./spec/end-to-end/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'spec/end-to-end/tests/**/*.{js,jsx,ts,tsx}',
    supportFile: 'spec/end-to-end/support/index.js',
    testIsolation: false,
  },
})
