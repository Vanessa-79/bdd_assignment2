Feature: Subtraction Operation
  Scenario: Subtract two positive numbers
    Given I have the numbers 10 and 4
    When I subtract the numbers
    Then the result should be 6

  Scenario: Subtract a smaller number from a larger one
    Given I have the numbers 4 and 10
    When I subtract the numbers
    Then the result should be -6
