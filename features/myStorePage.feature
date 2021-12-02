Feature: Create Account in AutomationPractice

  Scenario: Testing SignUP Page of the AutomationPractice

    Given This is the Home Page of MyStore
    When I Click on Sign in
    Then I should see the Text as "CREATE AN ACCOUNT"
    When I enter email address it should create account
    Then I should navigate and see the heading as "YOUR PERSONAL INFORMATION"
    When I enter the data in all fields as
    When I click on the Register Button
    Then I should be navigated to another page and can see the text as "MY ACCOUNT"
    When I Click Women button
    When I Click that product to add that into Cart
    Then I should see the message "Product successfully added to your shopping cart"
    When I will click on proceed to Checkout
    Then I should navigate to the page called "SHOPPING-CART SUMMARY"
    When I click to the Proceed for Checkout
    Then I should navigate and validate the address page "ADDRESSES"
    When I click and proceed to Checkout
    Then I navigate to next page and validate shipping details "SHIPPING"
    When I check the terms and proceed to Checkout button
    Then I should validate payments page "PLEASE CHOOSE YOUR PAYMENT METHOD"
    When I Choose payment type and click Confirm Order
    Then I navigate and see the Header as "ORDER CONFIRMATION"