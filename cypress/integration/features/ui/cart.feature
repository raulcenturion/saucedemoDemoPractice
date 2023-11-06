################################################################
# Cart automation test
################################################################

Feature: Cart Management
    # A shopping cart you can remove, view in detail, add or remove the product and continue shopping.

    Background:
        Given I am logged in as "standard_user" with password "secret_sauce"
    Scenario: Select all products and go to shopping cart
        When A user select all available products
        Then Go to shopping cart
    Scenario: Enter to detail, add and remove product from cart
        When A user user removes a product
        Then Select a product from the list to enter the details
        Then Removes and add the product
        Then Goes to shopping cart
        And  Continuous shopping
        And Logout & login
        Then The page shows the same quantity of selected products
