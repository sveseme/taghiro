import {
  validate,
  Result,
  MinSize,
  ErrorMessage,
  isSuccess,
  withGood,
} from "../src";
import { __, curry } from "ramda";

export function hm<T extends number, U extends { length: number }>(
  value: U,
  minSize: T,
): value is U & MinSize<T> {
  if (minSize < 0) {
    return false;
  }
  return value.length >= minSize;
}

function vMinimum<T extends { length: number }, U extends number>(
  value: T,
  min: U,
): Result<T & MinSize<U>, ErrorMessage> {
  return validate<T, T & MinSize<U>>(value, curry(hm)(__, min));
}

function a(n: string & MinSize<5>) {
  console.log(n);
  return n;
}

const v = vMinimum("hoo", 5);
if (isSuccess(v)) {
  a(v.value);
}
console.log(v);

class Person {
  message: string & MinSize<5>;
  constructor(message: string & MinSize<5>) {
    this.message = message;
  }
}

const s = withGood((s: string & MinSize<5>) => new Person(s), v);

console.log(s);
