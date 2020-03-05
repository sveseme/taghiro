import { isSorted, isUnsorted, hasMinSize, hasMaxSize } from "../src";

test("isSorted returns true for [1,2,3]", () => {
  expect(isSorted([1, 2, 3])).toBe(true);
});

test("isSorted returns false for [3,1,2]", () => {
  expect(isSorted([3, 1, 2])).toBe(false);
});

test("isUnsorted returns false for [1,2,3]", () => {
  expect(isUnsorted([1, 2, 3])).toBe(false);
});

test("isUnsorted returns false for [3,1,2]", () => {
  expect(isUnsorted([3, 1, 2])).toBe(true);
});

test("hasMinSize returns true for [3,1,2] and minimum size 2", () => {
  expect(hasMinSize([3, 1, 2], 2)).toBe(true);
});

test("hasMinSize returns true for [3,1,2] and minimum size 4", () => {
  expect(hasMinSize([3, 1, 2], 4)).toBe(false);
});

test("hasMinSize returns true for [] and minimum size 4", () => {
  expect(hasMinSize([], 2)).toBe(false);
});

test("hasMinSize returns true for [] and minimum size 0", () => {
  expect(hasMinSize([], 0)).toBe(true);
});

test("hasMinSize returns false for [1] and minimum size -2", () => {
  expect(hasMinSize([1], -2)).toBe(false);
});

test("hasMaxSize returns false for [1,2] and maximum size -2", () => {
  expect(hasMaxSize([1, 2], -2)).toBe(false);
});

test("hasMaxSize returns false for [7,1,2] and maximum size 2", () => {
  expect(hasMaxSize([7, 1, 2], 2)).toBe(false);
});

test("hasMaxSize returns true for [7,1,2] and maximum size 3", () => {
  expect(hasMaxSize([7, 1, 2], 3)).toBe(true);
});

test("hasMaxSize returns true for [7,1,2] and maximum size 2", () => {
  expect(hasMaxSize([7, 1, 2], 2)).toBe(false);
});

test("hasMaxSize returns true for [7,1,2] and maximum siz4", () => {
  expect(hasMaxSize([7, 1, 2], 4)).toBe(true);
});
