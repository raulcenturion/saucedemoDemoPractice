const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'd8tu85',
  pageLoadTimeout: 50000,
  requestTimeout: 50000,
  defaultCommandTimeout: 50000,
  screenshotOnRunFailure: true,
  responseTimeout: 50000,
  waitForAnimations: true,
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  hideXHR: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/integration/**/**/**/*.{feature,features}',
    excludeSpecPattern: ['**/stepdefinitions/*/*/*', '*.js', '*.md', '*.ts'],
    'baseUrl': 'https://www.saucedemo.com/',
  },
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 3,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 3
}
})
