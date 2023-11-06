################################################################
# Inventory automation test
################################################################

Feature: Inventory Management
    # A product page you can add to the shopping cart, view in detail or remove the product.

    Background:
        Given I am logged in as "standard_user" with password "secret_sauce"
    Scenario: Select all products
        When The user is in the Swag Labs web product inventory
        Then Select all available products
    Scenario: Remove 2 products
        When A user has products selected from inventory
        Then Select 2 products from the list to delete

    # An inventory of products you can enter the product detail
    Scenario: Product detail, remove product, return to inventory
        When A user go to product detail
        Then removes the product
        Then returns to product inventory