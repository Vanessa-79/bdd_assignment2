Feature: Greater than    
    Scenario: 5 > 3
        Given I start with 5
        When I compare greater than 3
        Then I end up with true

    Scenario: 3 > 5
        Given I start with 3
        When I compare greater than 5
        Then I end up with false