import { Tag } from './tag';

// Digits
// Letters
// LettersOrDigits
// LowerCase
// UpperCase
// EndsWith
// StartsWith
// Trimmed
// Uri
// Url
// Uuid

export type Trimmed = Tag<'trimmed'>;

export function isTrimmed<T extends number>(value: string): value is string & Trimmed {
  return value.trim() == value;
}

export type LowerCase = Tag<'lowercase'>;

export function isLowerCase<T extends number>(value: string): value is string & LowerCase {
  return value.toLowerCase() == value;
}

export type UpperCase = Tag<'uppercase'>;

export function isUpperCase<T extends number>(value: string): value is string & LowerCase {
  return value.toUpperCase() == value;
}

export declare class EndsWith<T extends string> {
  private __endsWith: T;
}

export function endsWith<T extends string>(value: string, endsWith: T): value is string & EndsWith<T> {
  return value.endsWith(endsWith);
}

export declare class StartsWith<T extends string> {
  private __startsWith: T;
}

export function startsWith<T extends string>(value: string, startsWith: T): value is string & StartsWith<T> {
  return value.startsWith(startsWith);
}
