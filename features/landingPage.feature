Feature: Landing page of internet herokuapp

  Scenario: As a user I validate landing pager header

    Given I am on the landing page of herokuapp
    
    Then I should see a header text "Welcome to the-internet"

    Scenario: Validating the link
     When I click on status code
    
     When I click on this link here
     Then I should be navigated to "Hypertext Transfer Protocol (HTTP) Status Code Registry"
     Then I should see the link HTTP Status Codes
     Then I should see the text "Last Updated"

    