import { Tag } from './tag';

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

export type Trimmed = Tag<'trimmed'>;

export declare class EndsWith<T extends string> {
  private __endsWith: T;
}

export function endsWith<T extends string>(value: string, endsWith: T): value is string & EndsWith<T> {
  return value.endsWith(endsWith);
}
