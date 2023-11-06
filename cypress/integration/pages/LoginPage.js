var loginLocators = require('../locators/LoginLocators');
const ENV = Cypress.env();
class LoginPage{


    elements = {
        usernameInput: () => cy.get(loginLocators.USERNAME_TXTBOX),
        passwordInput: () => cy.get(loginLocators.PASSWORD_TXTBOX),
        loginBtn: () => cy.get(loginLocators.LOGIN_BUTTON),
        errorMessage: () => cy.get(loginLocators.ERROR_MESSAGE),
      };
    
      typeUsername(username) {
        this.elements.usernameInput().type(username);
      };
    
      typePassword(password) {
        this.elements.passwordInput().type(password);
      };
    
      clickLogin() {
        this.elements.loginBtn().click();
      };
    
      submitLogin(username,password){
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.loginBtn().click();
      };
    }
export default LoginPage;