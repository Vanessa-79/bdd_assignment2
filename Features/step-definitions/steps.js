import { Given, When, Then } from "@cucumber/cucumber";
import { assert } from "chai";

let answer = 0;
let num1, num2, comparisonResult;
let bool1, bool2, answer1, number, result;

// Addition
Given("I start with {int}", function (input) {
  answer = input;
});

When("I add {int}", function (input) {
  answer += input;
});

// Subtraction
Given("I have the numbers {int} and {int} for subtraction", function (input1, input2) {
  num1 = input1;
  num2 = input2;
});

When("I subtract the numbers", function () {
  answer = num1 - num2;
});

When("I subtract {int}", function (input) {
  answer -= input;
});

// Multiplication
When("I multiply by {int}", function (input) {
  answer *= input;
});

// Division
When("I divide by {int}", function (input) {
  answer /= input;
});

// Modulo
When("I take modulo by {int}", function (input) {
  answer %= input;
});

// Exponential
When("I raise to the power of {int}", function (input) {
  answer = Math.pow(answer, input);
});

// Comparison: Greater Than
When("I compare greater than {int}", function (input) {
  answer = answer > input;
});

// Comparison: Less Than
When("I compare less than {int}", function (input) {
  answer = answer < input;
});

// Square Root
When("I take the square root", function () {
  answer = Math.sqrt(answer);
});

// Assertions
Then("I end up with {int}", function (input) {
  assert.equal(answer, input);
});

Then("I end up with true", function () {
  assert.equal(answer, true);
});

Then("I end up with false", function () {
  assert.equal(answer, false);
});

// AND operation
Given("I have the boolean values as {word} and {word}", function (value1, value2) {
  bool1 = value1 === "true";
  bool2 = value2 === "true";
});

When("I perform the AND operation", function () {
  answer1 = bool1 && bool2;
});

Then("the result should be true", function () {
  assert.equal(answer1, true);
});

Then("the result should be false", function () {
  assert.equal(answer1, false);
});

// OR operation
Given("I have the boolean values {word} and {word}", function (value1, value2) {
  bool1 = value1 === "true";
  bool2 = value2 === "true";
});

When("I perform the OR operation", function () {
  answer1 = bool1 || bool2;
});

Then("the result should be true", function () {
  assert.equal(answer1, true);
});

Then("the result should be false", function () {
  assert.equal(answer1, false);
});

// Compare equal numbers
Given("I have the numbers {int} and {int}", function (input1, input2) {
  num1 = input1;
  num2 = input2;
});

When("I compare if the numbers are equal", function () {
  comparisonResult = num1 === num2;
});

Then("the result should be true", function () {
  assert.equal(comparisonResult, true);
});

Then("the result should be false", function () {
  assert.equal(comparisonResult, false);
});

// Modulo calculation
When("I calculate the modulo", function () {
  answer = num1 % num2;
});

Then("the result should be {int}", function (expectedResult) {
  assert.equal(answer, expectedResult);
});

// Square Root Test with Given
Given("I start with a {int}", function (input) {
  number = input;
});

When("I take the square root of", function () {
  result = Math.sqrt(number);
});

Then("I end up with {int}", function (expectedResult) {
  assert.equal(result, expectedResult);
});
