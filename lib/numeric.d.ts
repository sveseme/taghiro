import { Tag } from "./tag";
export declare class IntervalOpen<T extends number, U extends number> {
    private __minValue;
    private __maxValue;
}
export declare function isInOpenInterval<T extends number, U extends number>(value: number, minValue: T, maxValue: U): value is number & IntervalOpen<T, U>;
export declare class IntervalClosed<T extends number, U extends number> {
    private __minValue;
    private __maxValue;
}
export declare function isInClosedInterval<T extends number, U extends number>(value: number, minValue: T, maxValue: U): value is number & IntervalOpen<T, U>;
export declare function isInRange<T extends number, U extends number>(value: number, minValue: T, maxValue: U): value is number & IntervalOpen<T, U>;
export declare class IntervalOpenClosed<T extends number, U extends number> {
    private __minValue;
    private __maxValue;
}
export declare function isInOpenClosedInterval<T extends number, U extends number>(value: number, minValue: T, maxValue: U): value is number & IntervalOpen<T, U>;
export declare class IntervalClosedOpen<T extends number, U extends number> {
    private __minValue;
    private __maxValue;
}
export declare function isInClosedOpenInterval<T extends number, U extends number>(value: number, minValue: T, maxValue: U): value is number & IntervalOpen<T, U>;
export declare class GreaterEqual<T extends number> {
    private __minValue;
}
export declare function greaterEqualThan<T extends number>(value: number, minValue: T): value is number & GreaterEqual<T>;
export declare class Greater<T extends number> {
    private __minValue;
}
export declare function greaterThan<T extends number>(value: number, minValue: T): value is number & GreaterEqual<T>;
export declare class LessEqual<T extends number> {
    private __maxValue;
}
export declare function lessEqualThan<T extends number>(value: number, maxValue: T): value is number & LessEqual<T>;
export declare class Less<T extends number> {
    private __maxValue;
}
export declare function lessThan<T extends number>(value: number, maxValue: T): value is number & LessEqual<T>;
export declare function positive<T extends number>(value: number): value is number & LessEqual<T>;
export declare function negative<T extends number>(value: number): value is number & LessEqual<T>;
export declare function nonPositive<T extends number>(value: number): value is number & LessEqual<T>;
export declare function nonNegative<T extends number>(value: number): value is number & LessEqual<T>;
export declare class Modulo<T extends number, U extends number> {
    private __m1;
    private __m2;
}
export declare function isModulo<T extends number, U extends number>(value: number, m1: T, m2: U): value is number & Modulo<T, U>;
export declare class Divisible<T extends number> {
    private __divisor;
}
export declare function isDivisible<T extends number>(value: number, d: T): value is number & Divisible<T>;
export declare class NotDivisible<T extends number> {
    private __divisor;
}
export declare function isNotDivisible<T extends number>(value: number, d: T): value is number & NotDivisible<T>;
declare type Odd = Tag<"odd">;
export declare function isOdd(value: number): value is number & Odd;
export declare function isEven(value: number): value is number & Odd;
declare type NotZero = Tag<"not-zero">;
export declare function isNotZero(value: number): value is number & NotZero;
export {};
