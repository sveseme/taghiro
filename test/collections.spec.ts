import { isSorted, isUnsorted } from "../src";

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
