@Calc-Addition
Feature: Calculator

  Scenario: Add two numbers
    Given I start calculator application
    When I add "15" and "5"
    Then I should get "20" as result
    