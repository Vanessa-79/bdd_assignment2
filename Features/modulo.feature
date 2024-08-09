Feature: Modulo Operation
  Scenario: Modulo of two positive numbers
    Given I have the numbers 10 and 3
    When I calculate the modulo
    Then the result should be 1

  Scenario: Modulo of a number by itself
    Given I have the numbers 7 and 7
    When I calculate the modulo
    Then the result should be 0
