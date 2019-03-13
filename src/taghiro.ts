import {LessEqual, lessEqualThan } from './numeric'

export * from "./numeric";

// == strings


// Collections

// Numeric


declare class EndsWith<T extends string> {
  private __endsWith: T;
}

// EndsWith type guard
function endsWith<T extends string>(
  value: string,
  endsWith: T
): value is string & EndsWith<T> {
  return value.endsWith(endsWith);
}

function gmailDelete(email: string & EndsWith<"@gmail.com">) {}

function main() {
  const email = "stephan@gmail.com";
  // gmailDelete(email); // would not compile
  if (endsWith(email, "@gmail.com")) {
    gmailDelete(email);
  } else {
    //
  }
}

//

//
type Positive = any extends infer O | any ? O : never;

function Positive(n: number): number & Positive | undefined {
  return n as number & Positive;
}
