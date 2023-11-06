var inventoryLocators = require('../locators/CommonLocators');
var invLocators = require('../locators/CommonLocators');

class InventoryPage {

    // Método para validar la URL de la página de inventario
    validateInventoryPageURL() {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    };

    // Método para hacer clic en un producto por su nombre
    clickProductByName(productName) {
        const productSelector = invLocators[`SL_${productName}_BTN`];
        cy.get(productSelector).click();
    };

    // Método para hacer clic en el botón de volver a la lista de productos
    clickBackToProducts() {
        cy.get(inventoryLocators.BACK_TO_PRODUCT_LKN).click();
    };

    //Método para ingresar al detalle del producto
    clickProductByDetailName() {
        cy.get(inventoryLocators.ITEM_TO_PRODUCT_2_LKN).click();
    };

    // Método para validar el carrito de compras
    verifyShoppingCartHasItems() {
        //cy.get('span.shopping_cart_badge').should('be.visible');
        cy.get(inventoryLocators.SHOPPING_CART_BADGE).should('be.visible');
        cy.get(inventoryLocators.SHOPPING_CART_BADGE)
            .invoke('text')
            .then((text) => cy.wrap(parseInt(text, 10)))
            .should('be.greaterThan', 0);
    };
    // Método para eliminar un producto
    removeProduct(productName) {
        const removeButtonSelector = invLocators[`SL_${productName}_RM_BTN`];
        cy.get(removeButtonSelector).click();
    };
    // Método para eliminar un producto desde el detalle
    removeProductFromDetail() {
        // const removeButtonSelector = invLocators[`SL_${productName}_DTRM_BTN`];
        // cy.get(removeButtonSelector).click();
        cy.get(inventoryLocators.SL_ONESIE_DTRM_BTN).click();

    };

}
export default InventoryPage;