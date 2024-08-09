Feature: OR Operation
  Scenario: Evaluate OR operation on false and true
    Given I have the boolean values false and true
    When I perform the OR operation
    Then the result should be true

  Scenario: Evaluate OR operation on false and false
    Given I have the boolean values false and false
    When I perform the OR operation
    Then the result should be false
