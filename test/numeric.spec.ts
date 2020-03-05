import {
  lessEqualThan,
  nonPositive,
  nonNegative,
  isModulo,
  isDivisible,
  isNotDivisible,
  isOdd,
  isEven,
  isNotZero,
  positive,
  negative,
  greaterEqualThan,
  LessEqual,
  greaterThan,
  lessThan,
  isInOpenInterval,
  isInClosedInterval,
  isInRange,
  isInOpenClosedInterval,
  isInClosedOpenInterval,
} from "../src";

test("isInOpenInterval return true for a value inside the interval", () => {
  expect(isInOpenInterval(6, 2, 7)).toBe(true);
});

test("isInOpenInterval return false for a value outside the interval", () => {
  expect(isInOpenInterval(9, 2, 7)).toBe(false);
});

test("isInOpenInterval return false for a value at the ends of the interval", () => {
  expect(isInOpenInterval(2, 2, 7)).toBe(false);
});

test("isInOpenInterval return false for a value at the ends of the interval", () => {
  expect(isInOpenInterval(7, 2, 7)).toBe(false);
});

test("isInOpenInterval return false for a value inside the interval with a lower negative bound", () => {
  expect(isInOpenInterval(0, -2, 7)).toBe(true);
});

test("isInClosedInterval return true for a value inside the interval", () => {
  expect(isInClosedInterval(6, 2, 7)).toBe(true);
});

test("isInClosedInterval return true for a value at the lower end of the interval", () => {
  expect(isInClosedInterval(2, 2, 7)).toBe(true);
});

test("isInClosedInterval return true for a value at the upper end of the interval", () => {
  expect(isInClosedInterval(7, 2, 7)).toBe(true);
});

test("isInClosedInterval return false for a value inside the interval with a lower negative bound", () => {
  expect(isInClosedInterval(0, -2, 7)).toBe(true);
});

test("isInRange return true for a value inside the interval", () => {
  expect(isInRange(6, 2, 7)).toBe(true);
});

test("isInRange return true for a value at the lower end of the interval", () => {
  expect(isInRange(2, 2, 7)).toBe(true);
});

test("isInRange return true for a value at the upper end of the interval", () => {
  expect(isInRange(7, 2, 7)).toBe(true);
});

test("isInRange return false for a value inside the interval with a lower negative bound", () => {
  expect(isInRange(0, -2, 7)).toBe(true);
});

test("isInOpenClosedInterval returns true for a value in the interval", () => {
  expect(isInOpenClosedInterval(5, 1, 9)).toBe(true);
});

test("isInOpenClosedInterval returns false for a value outside the interval", () => {
  expect(isInOpenClosedInterval(14, 1, 9)).toBe(false);
});

test("isInOpenClosedInterval returns false for a value at lower end of the interval", () => {
  expect(isInOpenClosedInterval(1, 1, 9)).toBe(false);
});

test("isInOpenClosedInterval returns true for a value at upper end of the interval", () => {
  expect(isInOpenClosedInterval(9, 1, 9)).toBe(true);
});

test("isInClosedOpenInteral returns true for value inside the interval", () => {
  expect(isInClosedOpenInterval(5, 4, 100)).toBe(true);
});

test("isInClosedOpenInteral returns false for value outside the interval", () => {
  expect(isInClosedOpenInterval(1000, 4, 100)).toBe(false);
});

test("isInClosedOpenInteral returns true for value at lower end of the interval", () => {
  expect(isInClosedOpenInterval(4, 4, 100)).toBe(true);
});

test("isInClosedOpenInteral returns false for value at upper end of the interval", () => {
  expect(isInClosedOpenInterval(100, 4, 100)).toBe(false);
});

test("lessEqualThan returns true for equal values", () => {
  const v = 3;
  expect(lessEqualThan(v, 3)).toBe(true);
});

test("lessEqualThan returns true for less values", () => {
  const v = 2;
  expect(lessEqualThan(v, 3)).toBe(true);
});

test("lessEqualThan returns false if greater value", () => {
  const v = 5;
  expect(lessEqualThan(v, 3)).toBe(false);
});

test("lessThan returns false for equal values", () => {
  expect(lessThan(3, 3)).toBe(false);
});

test("lessThan returns false for greater value", () => {
  expect(lessThan(4, 3)).toBe(false);
});

test("lessThan returns true for smaller value", () => {
  expect(lessThan(2, 7)).toBe(true);
});

test("lessThan returns true for smaller value and negative numbers", () => {
  expect(lessThan(-7, -2)).toBe(true);
});

test("greaterThan return false for equal values", () => {
  expect(greaterThan(4, 4)).toBe(false);
});

test("greaterThan return false for smaller value", () => {
  expect(greaterThan(4, 5)).toBe(false);
});

test("greaterThan return true for larger value", () => {
  expect(greaterThan(5, 4)).toBe(true);
});

test("greaterEqualThan return true for equal values", () => {
  expect(greaterEqualThan(4, 4)).toBe(true);
});

test("greaterEqualThan return false for less value", () => {
  expect(greaterEqualThan(2, 3)).toBe(false);
});

test("greaterEqualThan return true for equal value", () => {
  expect(greaterEqualThan(3, 3)).toBe(true);
});
//----

test("positive returns true for 11", () => {
  expect(positive(11)).toBe(true);
});

test("positive returns true for -11", () => {
  expect(positive(-11)).toBe(false);
});

test("positive returns true for 0", () => {
  expect(positive(0)).toBe(false);
});

test("negative returns true for -13", () => {
  expect(negative(-13)).toBe(true);
});

test("negative returns false for 2", () => {
  expect(negative(2)).toBe(false);
});

test("negative returns false for 0", () => {
  expect(negative(0)).toBe(false);
});

test("nonPositive returns true for -2", () => {
  const v = -2;
  expect(nonPositive(v)).toBe(true);
});

test("nonPositive returns true for 0", () => {
  const v = 0;
  expect(nonPositive(v)).toBe(true);
});

test("nonPositive returns true for 5", () => {
  const v = 5;
  expect(nonPositive(v)).toBe(false);
});

test("nonNegative returns false for -2", () => {
  const v = -2;
  expect(nonNegative(v)).toBe(false);
});

test("nonNegative returns true for 0", () => {
  const v = 0;
  expect(nonNegative(v)).toBe(true);
});

test("nonNegative returns true for 5", () => {
  const v = 5;
  expect(nonNegative(v)).toBe(true);
});

test("isModulo returns true for 4 mod 3 = 1", () => {
  expect(isModulo(4, 3, 1)).toBe(true);
});

test("isModulo returns true for 4 mod 3 = 2", () => {
  expect(isModulo(4, 3, 2)).toBe(false);
});

test("isModulo returns true for 4 mod 4 = 0", () => {
  expect(isModulo(4, 4, 0)).toBe(true);
});

test("isDivisible returns true for 9 and 0", () => {
  expect(isDivisible(9, 0)).toBe(false);
});

test("isDivisible returns true for 9 and 3", () => {
  expect(isDivisible(9, 3)).toBe(true);
});

test("isDivisible returns false for 9 and 2", () => {
  expect(isDivisible(9, 2)).toBe(false);
});

test("isNotDivisible returns true for 9 and 2", () => {
  expect(isNotDivisible(9, 2)).toBe(true);
});

test("isNotDivisible returns true for 9 and 3", () => {
  expect(isNotDivisible(9, 3)).toBe(false);
});

test("isNotDivisible returns true for 9 and 0", () => {
  expect(isNotDivisible(9, 0)).toBe(true);
});

test("isOdd returns true for 5", () => {
  expect(isOdd(5)).toBe(true);
});

test("isOdd returns true for -5", () => {
  expect(isOdd(-5)).toBe(true);
});

test("isOdd returns false for -4", () => {
  expect(isOdd(-4)).toBe(false);
});

test("isOdd returns false for 4", () => {
  expect(isOdd(4)).toBe(false);
});

test("isOdd returns false for 4", () => {
  expect(isOdd(4)).toBe(false);
});

test("isOdd returns false for 0", () => {
  expect(isOdd(0)).toBe(false);
});

test("isEven returns true for 4", () => {
  expect(isEven(4)).toBe(true);
});

test("isEven returns false for 7", () => {
  expect(isEven(7)).toBe(false);
});

test("isEven returns true for 0", () => {
  expect(isEven(0)).toBe(true);
});

test("isEven returns true for -2", () => {
  expect(isEven(-2)).toBe(true);
});

test("isEven returns false for -9", () => {
  expect(isEven(-9)).toBe(false);
});

test("isNotZero returns true for 1", () => {
  expect(isNotZero(1)).toBe(true);
});

test("isNotZero returns false for 0", () => {
  expect(isNotZero(0)).toBe(false);
});
