import { Tag } from './tag';

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

export declare class GreaterEqual<T extends number> {
  private __minValue: T;
}

export function greaterEqualThan<T extends number>(value: number, minValue: T): value is number & GreaterEqual<T> {
  return value >= minValue;
}

export declare class Greater<T extends number> {
  private __minValue: T;
}

export function greaterThan<T extends number>(value: number, minValue: T): value is number & GreaterEqual<T> {
  return value > minValue;
}

export declare class LessEqual<T extends number> {
  private __maxValue: T;
}

export function lessEqualThan<T extends number>(value: number, maxValue: T): value is number & LessEqual<T> {
  return value <= maxValue;
}

export declare class Less<T extends number> {
  private __maxValue: T;
}

export function lessThan<T extends number>(value: number, maxValue: T): value is number & LessEqual<T> {
  return value < maxValue;
}

type Positive = Tag<'positive'>;

export function positive<T extends number>(value: number): value is number & LessEqual<T> {
  return value > 0;
}

type Negative = Tag<'negative'>;

export function negative<T extends number>(value: number): value is number & LessEqual<T> {
  return value < 0;
}

type NonPositive = Tag<'non-positive'>;

export function nonPositive<T extends number>(value: number): value is number & LessEqual<T> {
  return !negative(value);
}

type NonNegative = Tag<'non-negative'>;

export function nonNegative<T extends number>(value: number): value is number & LessEqual<T> {
  return !positive(value);
}

export declare class Modulo<T extends number, U extends number> {
  private __m1: T;
  private __m2: U;
}

export function isModulo<T extends number, U extends number>(
  value: number,
  m1: T,
  m2: U,
): value is number & Modulo<T, U> {
  return value % m1 == m2;
}

export declare class Divisible<T extends number> {
  private __divisor: T;
}

export function isDivisible<T extends number>(value: number, d: T): value is number & Divisible<T> {
  return isModulo(value, d, 0);
}

export declare class NotDivisible<T extends number> {
  private __divisor: T;
}

export function isNotDivisible<T extends number>(value: number, d: T): value is number & NotDivisible<T> {
  return !isDivisible(value, d);
}

type Odd = Tag<'odd'>;

export function isOdd(value: number): value is number & Odd {
  return isNotDivisible(value, 2);
}

type Even = Tag<'even'>;

export function isEven(value: number): value is number & Odd {
  return isDivisible(value, 2);
}
