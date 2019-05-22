import { Tag } from './tag';
export declare type Sorted = Tag<'sorted'>;
export declare type Unsorted = Tag<'unsorted'>;
export declare function isSorted<T extends number>(a: Array<T>): a is Array<T> & Sorted;
export declare function isUnsorted<T extends number>(a: Array<T>): a is Array<T> & Unsorted;
export declare class Size<T extends number> {
    private __size;
}
export declare function hasSize<T extends number, U extends {
    length: number;
}>(value: U, size: T): value is U & Size<T>;
export declare class MinSize<T extends number> {
    private __minSize;
}
export declare function hasMinSize<T extends number, U extends {
    length: number;
}>(value: U, minSize: T): value is U & MinSize<T>;
export declare class MaxSize<T extends number> {
    private __minSize;
}
export declare function hasMaxSize<T extends number, U extends {
    length: number;
}>(value: U, maxSize: T): value is U & Size<T>;
export declare type Empty = Tag<'empty'>;
export declare function isEmpty<T extends {
    length: number;
}>(value: T): value is T & Empty;
export declare type NonEmpty = Tag<'non-empty'>;
export declare function isNotEmpty<T extends {
    length: number;
}>(value: T): value is T & NonEmpty;
