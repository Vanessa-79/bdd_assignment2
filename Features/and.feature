Feature: AND Operation
  Scenario: Evaluate AND operation on true and true
    Given I have the boolean values true and true
    When I perform the AND operation
    Then the result should be true

  Scenario: Evaluate AND operation on true and false
    Given I have the boolean values true and false
    When I perform the AND operation
    Then the result should be false
