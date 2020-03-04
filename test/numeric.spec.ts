import {
  lessEqualThan,
  nonPositive,
  nonNegative,
  isModulo,
  isDivisible,
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

test("isDivisible returns true for 9 and 3", () => {
  expect(isDivisible(9, 3)).toBe(true);
});

test("isDivisible returns true for 9 and 2", () => {
  expect(isDivisible(9, 2)).toBe(false);
});
