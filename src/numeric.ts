import {Tag} from './tag';

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

export function greaterEqualThan<T extends number>(
  value: number,
  minValue: T
): value is number & GreaterEqual<T> {
  return value >= minValue;
}

export declare class Greater<T extends number> {
  private __minValue: T;
}

export function greaterThan<T extends number>(
  value: number,
  minValue: T
): value is number & GreaterEqual<T> {
  return value > minValue;
}

export declare class LessEqual<T extends number> {
  private __maxValue: T;
}

export function lessEqualThan<T extends number>(
  value: number,
  maxValue: T
): value is number & LessEqual<T> {
  return value <= maxValue;
}

export declare class Less<T extends number> {
  private __maxValue: T;
}

export function lessThan<T extends number>(
  value: number,
  maxValue: T
): value is number & LessEqual<T> {
  return value < maxValue;
}

type Positive = Tag<"positive">;

export function positive<T extends number>(
  value: number
): value is number & LessEqual<T> {
  return value > 0;
}

type NonPositive = Tag<"non-positive">;

export function nonPositive<T extends number>(
  value: number
): value is number & LessEqual<T> {
  return ! negative(value);
}

type Negative = Tag<"negative">;

export function negative<T extends number>(
  value: number
): value is number & LessEqual<T> {
  return value < 0;
}

type NonNegative = Tag<"non-negative">;

export function nonNegative<T extends number>(
  value: number
): value is number & LessEqual<T> {
  return ! positive(value);
}
