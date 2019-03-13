export { hasMinValue };
declare class Size<T extends number> {
    private __size;
}
export declare function hasMinSize<T extends number, U extends {
    length: number;
}>(value: U, minSize: T): value is U & Size<T>;
declare class MinValue<T extends number> {
    private __minValue;
}
declare function hasMinValue<T extends number>(value: number, minValue: T): value is number & MinValue<T>;
