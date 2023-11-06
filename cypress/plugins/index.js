/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const fs = require('fs-extra');
const path = require('path');
const cucumber = require('cypress-cucumber-preprocessor').default;
const sqlServer = require('cypress-sql-server');
const dataBaseEnv = require('./dataBaseEnv');

module.exports = (on, config) => {

  on('file:preprocessor', cucumber());
 
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  function getConfigurationByFile(env) {
      const pathToConfigFile = path.resolve("./cypress/config/", `${env}.config.json`);

      return fs.readJson(pathToConfigFile);
  }

  //if no environment is provided, then PR env will be default
  const env = config.env.configFile || "qa";

  on('task', sqlServer.loadDBPlugin(dataBaseEnv.get("db", env)));

  on('before:browser:launch', (browser, launchOptions) => {

    if (browser.name === 'chrome') {
      //launchOptions.args.push('--disable-application-cache')
      //launchOptions.args.push('--disable-site-isolation-trials')
      //launchOptions.args.push('--disable-web-security')
      launchOptions.args.push('--incognito')
      launchOptions.args.push('--disable-application-cache')
      launchOptions.args.push('--auto-open-devtools-for-tabs')
      launchOptions.args.push('--cypress-remote-debugging-port=9222')
      // whatever you return here becomes the new args
      return launchOptions
    }

  })

  return getConfigurationByFile(env);
};

