Feature: Add to Cart Functionality
   The porpose of this is to check if the user can add an item to the Cart

   Scenario: Verify if user is able to add items to the cart on the homepage
      Given I'm at the homepage
      When I hover on one item
      And I click on add to cart
      Then The pop up validation should show up

   Scenario: Verify if user can add an item to the cart on the Quick view
      Given I'm on the homepage
      When I click on any item
      And I add it to the cart
      Then The success validation should show up

   # Scenario: Verify if user can add an item to the cart on the actual item's view
   #    Given I am located on the homepage
   #    When I hover on any item
   #    And I click on More
   #    And I click on Add to Cart
   #    Then It should show me the success validation

   # Scenario: Verify if user can add to the cart an item from the search results's list
   #    Given I perform a search for blouse
   #    When I click on the List View
   #    And I click on the Add To cart button
   #    Then It should show me the validation

   # Scenario: Verify if user can go to the checkout view by clicking on the Checkout button on the cart header
   #    Given I'm on the homepage screen
   #    When I seach for an item
   #    And I add that Item to the Cart
   #    And I click on the Cart Header
   #    Then I should be taken to the checkout screen


   