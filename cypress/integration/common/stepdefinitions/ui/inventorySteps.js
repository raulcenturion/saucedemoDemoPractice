/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import InventoryPage from '../../../pages/InventoryPage';


const inventoryPage = new InventoryPage();

Given('I am logged in as {string} with password {string}', (username, password) => {
    cy.login(username, password);
});

When('The user is in the Swag Labs web product inventory', () => {
    inventoryPage.validateInventoryPageURL();
});

Then('Select all available products', () => {
    inventoryPage.clickProductByName('BACKPACK');
    inventoryPage.clickProductByName('BIKE_LIGHT');
    inventoryPage.clickProductByName('BOLT_T_SHIRT');
    inventoryPage.clickProductByName('FLEECE_JACKET');
    inventoryPage.clickProductByName('ONESIE');
    inventoryPage.clickProductByName('T_SHIRT_RED');
});


When('A user has products selected from inventory', () => {
    inventoryPage.clickProductByName('BACKPACK');
    inventoryPage.clickProductByName('BIKE_LIGHT');
    inventoryPage.clickProductByName('BOLT_T_SHIRT');
    inventoryPage.clickProductByName('FLEECE_JACKET');
    inventoryPage.clickProductByName('ONESIE');
    inventoryPage.clickProductByName('T_SHIRT_RED');
    inventoryPage.verifyShoppingCartHasItems();
});

Then('Select 2 products from the list to delete', () => {
    cy.get("[data-test='remove-sauce-labs-backpack']").click();
    cy.get("[data-test='remove-sauce-labs-bike-light']").click();
    //inventoryPage.removeProduct('BACKPACK_RM')
    //inventoryPage.removeProduct('BIKE_LIGHT_RM')
});

When('A user go to product detail', (productName) => {
    inventoryPage.clickProductByDetailName('Sauce Labs Bike Light');
});

Then('removes the product', () => {
    inventoryPage.clickProductByName('ONESIE');
    //cy.get("[data-test='remove-sauce-labs-onesie']").should('be.visible').click();
    inventoryPage.removeProductFromDetail();
});

Then('returns to product inventory', () => {
    inventoryPage.clickBackToProducts();
});

