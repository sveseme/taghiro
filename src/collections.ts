import { Tag } from './tag';

// Size
// MinSize
// MaxSize
// Empty
// NonEmpty
// Sorted
// Unsorted

export type Sorted = Tag<'sorted'>;

export type Unsorted = Tag<'unsorted'>;

export function isSorted<T extends number>(a: Array<T>): a is Array<T> & Sorted {
  for (var i = 0; i < a.length - 1; i++) {
    if (a[i] > a[i + 1]) {
      return false;
    }
  }
  return true;
}

export function isUnsorted<T extends number>(a: Array<T>): a is Array<T> & Unsorted {
  for (var i = 0; i < a.length - 1; i++) {
    if (a[i] > a[i + 1]) {
      return true;
    }
  }
  return false;
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

export function hasMinSize<T extends number, U extends { length: number }>(
  value: U,
  minSize: T,
): value is U & MinSize<T> {
  return value.length >= minSize;
}

export declare class MaxSize<T extends number> {
  private __minSize: T;
}

export function hasMaxSize<T extends number, U extends { length: number }>(value: U, maxSize: T): value is U & Size<T> {
  return value.length <= maxSize;
}

export type Empty = Tag<'empty'>;

export function isEmpty<T extends { length: number }>(value: T): value is T & Empty {
  return hasSize(value, 0);
}

export type NonEmpty = Tag<'non-empty'>;

export function isNotEmpty<T extends { length: number }>(value: T): value is T & Empty {
  return !isEmpty(value);
}
