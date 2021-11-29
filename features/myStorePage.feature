Feature: Create Account in AutomationPractice

  Scenario: Testing SignUP Page of the AutomationPractice

    Given This is the Home Page of MyStore
    When I Click on Sign in
    Then I should see the Text as "CREATE AN ACCOUNT"
    When I enter email address it should create account
    When I click on create an account button
    Then I should navigate and see the heading as "YOUR PERSONAL INFORMATION"
    When I enter the data in all fields as
    When I click on the Register Button
    Then I should be navigated to another page and can see the text as "MY ACCOUNT"
    When I Click Women button
    Then I should go the Subcatagories under Women
    When I Click that product to actions to add that into Cart
    Then I should see the message "Product successfully added to your shopping cart"
    When I will click on proceed to Checkout 
    Then I should navigate to the page called "SHOPPING-CART SUMMARY"
    When I click to the Proceed for Checkout
    Then I should navigate the cart for checking the product and address
    When I click and proceed to Checkout
    Then I navigate to next page and validate shipping details
    When I check the terms and proceed to Checkout button
    Then I should be navigated and validate payments page
    When I click on the payment type button
    Then I should be navigate and validate the bankwire payment page
    When I click on navigated to I confirm my order
    Then I navigate and validate the order confirmation page

