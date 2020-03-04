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
} from "../src";

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

test("greaterEqualThan return true for equal values", () => {
  expect(greaterEqualThan(4, 3)).toBe(true);
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
