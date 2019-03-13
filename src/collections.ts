import { Tag } from './tag';

// Size
// MinSize
// MaxSize
// Empty
// NonEmpty

export type Empty = Tag<'empty'>;

export function isEmpty<T extends { length: number }>(value: T): value is T & Empty {
  return value.length == 0;
}

export type NonEmpty = Tag<'non-empty'>;

export function isNotEmpty<T extends { length: number }>(value: T): value is T & Empty {
  return !isEmpty(value);
}

export declare class Size<T extends number> {
  private __size: T;
}

export function hasSize<T extends number, U extends { length: number }>(value: U, size: T): value is U & Size<T> {
  return value.length == size;
}

export declare class MinSize<T extends number> {
  private __minSize: T;
}

export function hasMinSize<T extends number, U extends { length: number }>(value: U, minSize: T): value is U & Size<T> {
  return value.length >= minSize;
}

export declare class MaxSize<T extends number> {
  private __minSize: T;
}

export function hasMaxSize<T extends number, U extends { length: number }>(value: U, maxSize: T): value is U & Size<T> {
  return value.length <= maxSize;
}
