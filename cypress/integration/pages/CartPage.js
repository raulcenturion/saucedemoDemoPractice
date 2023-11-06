import cartLocators from '../locators/CommonLocators';
var invLocators = require('../locators/CommonLocators');
let initialCartItemCount = 0;

class CartPage {

    linkToCart() {
        cy.get(cartLocators.SHOPING_CART_LINK).click();
    };
    removeProductToCart() {
        cy.get(cartLocators.SL_FLEECE_JACKET_RM_BTN).click();
    };
    linkToDetailCartProduct() {
        cy.get(cartLocators.ITEM_TO_PRODUCT_0_LKN).click();
    };
    removeProducToCart(productName) {
        const productSelector = invLocators[`SL_${productName}_BTN`];
        cy.get(productSelector).click();
    };
    addProductFromCart(productName) {
        const productSelector = invLocators[`SL_${productName}_BTN`];
        cy.get(productSelector).click();
    };
    clickProductByName(productName) {
        const productSelector = invLocators[`SL_${productName}_BTN`];
        cy.get(productSelector).click();
    };
    clicContinueShoppBtn() {
        cy.get(cartLocators.SL_CONTINUE_SHOPP_BTN).click();
    };
    productCounter() {
        cy.get(cartLocators.SHOPPING_CART_BADGE)
        .invoke('text')
        .then((count) => {
            initialCartItemCount = parseInt(count, 10);
        });
    };
    instantChecker(){
        cy.get(cartLocators.SHOPPING_CART_BADGE)
        .invoke('text')
        .should('not.eq', initialCartItemCount);
    };
    finalChecker(){
        cy.get(cartLocators.SHOPPING_CART_BADGE)
        .invoke('text')
        .should('eq', initialCartItemCount.toString());
    };

};
export default CartPage;