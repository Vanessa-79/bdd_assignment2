Feature: Exponential
    Scenario: 2 ^ 3
        Given I start with 2
        When I raise to the power of 3
        Then I end up with 8

    Scenario: 3 ^ 2
        Given I start with 3
        When I raise to the power of 2
        Then I end up with 9