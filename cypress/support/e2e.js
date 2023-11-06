// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration ./../integration/common'
// ***********************************************************

import './commands'
//import Commons from '../integration/stepdefinitions'
//const commons = new Commons();
const moment = require('moment')
require('cypress-xpath')
const addContext = require('mochawesome/addContext');

beforeEach(function () {
  const currentTestName = this.currentTest.fullTitle();
  if (!currentTestName.includes('inventory.feature')) {
  cy.clearLocalStorage();
  cy.clearCookies();
  cy.log('Test run started on : ' + new moment().format('DD-MM-YYYY HH:mm:ss'));
  }
})

//before(function(){
  //commons.validateUserInfo()
//});

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

  // Hide fetch/XHR requests
  if (Cypress.config('hideXHR')) {
    const app = window.top;

    if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
      const style = app.document.createElement('style');
      style.innerHTML =
        '.command-name-request, .command-name-xhr { display: none }';
      style.setAttribute('data-hide-command-log-request', '');

      app.document.head.appendChild(style);
    }
  }
  
//Runs after a test completes

Cypress.on('test:after:run', (test, runnable) => {
  const fileUrl = test.invocationDetails.fileUrl
  const folder = fileUrl.split('/')
  let scenarioName = window.testState.currentScenario.name;
  let stepResult = window.testState.stepResults;

  window.testState.scenarioSteps[scenarioName].forEach(function(currStep,index)   {
      addContext({ test }, {
        title: currStep.keyword + " " +  currStep.text,
        value: stepResult[index].status + " " + stepResult[index].duration
      })
  });
  
  cy.log('Test run ended on : ' + new moment().format('DD-MM-YYYY HH:mm:ss'));

  const spec_title = runnable.parent.title;

  console.log("spec_title :", spec_title);
  console.log("test.state  :", test.state);
  console.log("Cypress.spec.name  :", Cypress.spec.name);
  console.log("test.title  :", test.title);

  if (test.state === 'failed') {
    addContext({ test }, {
      title: 'Failing Screenshot: ' + '>> screenshots/' + Cypress.spec.name + '/' + spec_title + ' -- ' + test.title + ' (failed)' + '.png <<',
      value: 'screenshots/' + folder[7] + '/' + folder[8] + '/' + spec_title + ' -- ' + test.title + ' (failed)' + '.png'
    })
  }
  addContext({ test }, {
    title: 'Video:',
    value: 'videos/' + folder[7] + '/' + folder[8] + '.mp4'
  })

});
