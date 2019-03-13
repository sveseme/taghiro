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
