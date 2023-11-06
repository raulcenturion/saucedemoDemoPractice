const TIMEOUT_EXPLICIT = 4000;
const TIME_LOAD_PAGE = 4000;
var numeral = require('numeral');

module.exports = {
    loadKeyWords: function() {
        Cypress.Commands.add('isNotEmpty', (element) => {
            expect(element).to.not.be.empty
        });
        Cypress.Commands.add('isEqualsTo', (base,element) => {
            expect(base).equal(element);
        });
        Cypress.Commands.add('isNotNull', (element) => {
            expect(element).to.not.be.null
        });
        Cypress.Commands.add('existProperty', (base, element) => {
            expect(base).to.have.property(element)
        });
        Cypress.Commands.add('validateStatusCode', (base, element) => {
            expect(base).to.eq(element)
        });
        Cypress.Commands.add('typeof', (element, type) => {
            expect(element).to.be.a(type)
        });
        Cypress.Commands.add('sendKeys', (element, text) => {
            cy.get(element).should('be.visible').type(text, { force: true });
        });
        Cypress.Commands.add('clickButton', (element) => {
            cy.get(element).should('be.visible').click({ force: true });          
        });
        Cypress.Commands.add('clickButtonXpath', (element) => {
            cy.xpath(element).should('be.visible').click();
        });
        Cypress.Commands.add('validateCurrency', (element, text) => {
            cy.get(element).first().text().then(value => {
                cy.log("Text is :", value);
                expect(value.replace('$', '').replace('.', '').replace(' ', '').replace(',', '.')).to.include(text);
            });
        });

        Cypress.Commands.add('existElement', (element) => {
            cy.get(element).should('be.visible')
        });

        Cypress.Commands.add('containsLabel', (label) => {
            cy.contains(label)
        });

        Cypress.Commands.add('closePublicity', (element) => {
            cy.get("body").then($body => {
                if ($body.find(element).length > 0) {   
                //evaluates as true if button exists at all
                    cy.get(element).then($header => {
                      if ($header.is(':visible')){
                        cy.get(element).click();
                      }
                    });
                } else {
                   assert.isOk('everything','everything is OK');
                }
            });
        });

        Cypress.Commands.add('validateLengthContainer', (container, length) => {
            cy.get(container).children()
                .should('have.length', length); 
        });
        Cypress.Commands.add('validateURL', (url_expect) => {
            cy.url().then((url) => { 
                expect(url_expect).equal(url);
            })
        });
        Cypress.Commands.add('formatCurrency', (element) => {
            numeral.register('locale', 'arg', {
                delimiters: {
                    thousands: '.',
                    decimal: ','
                },
                currency: {
                    symbol: '$'
                }
            });
            numeral.locale('arg');
            let number = numeral(element);
            let string = number.format('$ 0.0,00');
            cy.log("::::::::: resp " + string);
            return string;
        });
    }
}