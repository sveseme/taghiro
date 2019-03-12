export { hasMinValue };

// == Collections & Strings (.length)
// Size
// MinSize
// MaxSize
// Empty
// NonEmpty

// == numeric
// MinValue
// MaxValue
// IntervalOpen
// IntervalOpenClosed
// IntervalClosedOpen
// IntervalClosed
// Less
// LessEqual
// Greater
// GreaterEqual
// Positive
// NonPositive
// Negative
// NonNegative
// Modulo
// Divisable
// NonDivisable
// Even
// Odd

// == char
// Digit
// Letter
// LetterOrDigit
// Lowercase
// UpperCase

// == strings
// Digits
// Letters
// LettersOrDigits
// LowerCase
// UpperCase
// EndsWith
// StartsWith
// Uri
// URL
// UUID
// Trimmed

type Tag<S extends string> = {
  readonly __tag: S;
};

// Collections

type Empty = Tag<"empty">;

function isEmpty<T extends { length: number }>(value: T): value is T & Empty {
  return value.length == 0;
}

type NonEmpty = Tag<"non-empty">;

function isNotEmpty<T extends { length: number }>(
  value: T
): value is T & Empty {
  return !isEmpty(value);
}

class Size<T extends number> {
  private __size: T;
}

function hasSize<T extends number, U extends { length: number }>(
  value: U,
  size: T
): value is U & Size<T> {
  return value.length == size;
}

class MinSize<T extends number> {
  private __minSize: T;
}

export function hasMinSize<T extends number, U extends { length: number }>(
  value: U,
  minSize: T
): value is U & Size<T> {
  return value.length >= minSize;
}

class MaxSize<T extends number> {
  private __minSize: T;
}

function hasMaxSize<T extends number, U extends { length: number }>(
  value: U,
  maxSize: T
): value is U & Size<T> {
  return value.length <= maxSize;
}

// Numeric

declare class MinValue<T extends number> {
  private __minValue: T;
}

function hasMinValue<T extends number>(
  value: number,
  minValue: T
): value is number & MinValue<T> {
  return value >= minValue;
}

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

function sqrt(n: number & Positive): number & Positive {
  return n;
}

function s(n: number): number {
  return n;
}

function z() {
  const x = Positive(3);
  sqrt(x);

  const y = undefined;
  s(y);
}
