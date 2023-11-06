/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import CartPage from "../../../pages/CartPage";
const cartPage = new CartPage();


Given('I am logged in as {string} with password {string}', (username, password) => {
    cy.login(username, password);
});
//Select all products and go to shopping cart
When('A user select all available products', () => {
    cartPage.clickProductByName('BACKPACK');
    cartPage.clickProductByName('BIKE_LIGHT');
    cartPage.clickProductByName('BOLT_T_SHIRT');
    cartPage.clickProductByName('FLEECE_JACKET');
    cartPage.clickProductByName('ONESIE');
    cartPage.clickProductByName('T_SHIRT_RED');
});

Then('Go to shopping cart', () => {
    cartPage.linkToCart();  
});
//Enter to detail, add and remove product from cart
When('A user user removes a product', () => {
    cartPage.clickProductByName('BACKPACK');
    cartPage.clickProductByName('BIKE_LIGHT');
    cartPage.clickProductByName('BOLT_T_SHIRT');
    cartPage.clickProductByName('FLEECE_JACKET');
    cartPage.clickProductByName('ONESIE');
    cartPage.clickProductByName('T_SHIRT_RED');
    cartPage.linkToCart();
    cartPage.removeProducToCart('BACKPACK_RM');
});

Then('Select a product from the list to enter the details', () => {
    cartPage.linkToDetailCartProduct();
});

Then('Removes and add the product', () => {
    cartPage.removeProducToCart('BIKE_LIGHT_RM');
    cartPage.addProductFromCart('BIKE_LIGHT');
    cartPage.productCounter();
});

Then('Goes to shopping cart', () => {
    cartPage.linkToCart();
    cartPage.instantChecker();
});

And('Continuous shopping', () => {
    cartPage.clicContinueShoppBtn();
});

And('Logout & login', () => {
    cy.logout();
    cy.login('standard_user', 'secret_sauce');
});

Then('The page shows the same quantity of selected products', () => {
    cartPage.finalChecker();
});
