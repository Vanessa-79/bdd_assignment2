Feature: Less than    
    Scenario: 3 < 5
        Given I start with 3
        When I compare less than 5
        Then I end up with true

    Scenario: 5 < 3
        Given I start with 5
        When I compare less than 3
        Then I end up with false