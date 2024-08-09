Feature: Equal To Operation
  Scenario: Compare equal numbers
    Given I have the numbers 5 and 5
    When I compare if the numbers are equal
    Then the result should be true

  Scenario: Compare different numbers
    Given I have the numbers 5 and 3
    When I compare if the numbers are equal
    Then the result should be false
