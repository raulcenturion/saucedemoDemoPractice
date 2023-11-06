/// <reference types="cypress" />
import checkLocators from '../locators/CommonLocators';
var invLocators = require('../locators/CommonLocators');
import { MENSAJES_ERROR } from './ConstantErrors';
import faker from 'faker';


class CheckoutPage {

    clickProductByName(productName) {
        const productSelector = invLocators[`SL_${productName}_BTN`];
        cy.get(productSelector).click();
    };

    linkToCart() {
        cy.get(checkLocators.SHOPING_CART_LINK).click();
    };
        
    clickCheckoutBtn(){
        cy.get(checkLocators.SL_CHECKOUT_BTN).click();
    };
    
    cancelCheckoutBtn(){
        cy.get(checkLocators.SL_CANCEL_BTN).click();
    };
    
    firstNameForm(){
        cy.get(checkLocators.SL_FIRST_NAME_FORM).type(faker.name.firstName());
    };

    lastNameForm(){
        cy.get(checkLocators.SL_LAST_NAME_FORM).type(faker.name.lastName());
    };

    postalCodeForm(){
        cy.get(checkLocators.SL_POSTAL_CODE_FORM).type(faker.address.zipCode());
    };

    clearFirstNameForm(){
        cy.get(checkLocators.SL_FIRST_NAME_FORM).clear();
    };

    clearLastNameForm(){
        cy.get(checkLocators.SL_LAST_NAME_FORM).clear();
    };

    clearZipeCodeForm(){
        cy.get(checkLocators.SL_POSTAL_CODE_FORM).clear();
    };

    firstNameError(){
        cy.get(checkLocators.SL_ERRORS_MSJ).should('have.text', MENSAJES_ERROR.FIRST_NAME);
    };

    lastNameError(){
        cy.get(checkLocators.SL_ERRORS_MSJ).should('have.text', MENSAJES_ERROR.LAST_NAME);
    };

    zipCodeError(){
        cy.get(checkLocators.SL_ERRORS_MSJ).should('have.text', MENSAJES_ERROR.POSTAL_CODE);
    };

    checkContinueBtn(){
        cy.get(checkLocators.SL_CONTINUE_BTN).click();
    };

    finishCheckBtn(){
        cy.get(checkLocators.SL_FINISH_BTN).click();
    };

    backHomeBtn() {
        cy.get(checkLocators.BACK_TO_PRODUCT_LKN).click();
    };
    
};
export default CheckoutPage;