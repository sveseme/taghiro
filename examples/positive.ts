import {
  negative,
  positive,
  Positive,
  GreaterEqual,
  greaterEqualThan,
} from "../src";

// You can add logs by using console.log
console.log("We ♡ JavaScript!");

function x(a: number & Positive & GreaterEqual<10>): number {
  return a + 1;
}

function y(a: number & GreaterEqual<14>): number {
  return a + 1;
}

const v = 11;
console.log(v);

if (positive(v) && greaterEqualThan(v, 10)) {
  const z = x(v);
}
