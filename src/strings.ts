import { Tag } from './tag';

// Regex
// Digits
// Letters
// LettersOrDigits
// LowerCase
// UpperCase
// EndsWith
// StartsWith
// Trimmed
// Url
// Uuid

export declare class Regex<T extends string> {
  private __regex: T;
}

export function isRegex<T extends string>(value: string, regex: T): value is string & Regex<T> {
  const regexp = new RegExp(regex);
  return regexp.test(value);
}

export type Accii = Tag<'ascii'>;

export function isAscii<T extends number>(value: string): value is string & Uuid {
  const regexp = new RegExp('^[\x00-\x7F]+$');
  return regexp.test(value);
}

export type Digits = Tag<'digits'>;

export function isDigits(value: string): value is string & Digits {
  return isRegex(value, '^\\d*$');
}

export type Letters = Tag<'letters'>;

export function isLetters(value: string): value is string & Letters {
  return isRegex(value, '^[a-zA-Z]+$');
}

export type LettersOrDigits = Tag<'letters-or-digits'>;

export function isLetterOrDigits(value: string): value is string & LettersOrDigits {
  return isRegex(value, '^[\\da-zA-Z]+$');
}

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

export type Url = Tag<'url'>;

export function isUrl<T extends number>(value: string): value is string & LowerCase {
  try {
    new URL(value);
    return true;
  } catch (_) {
    return false;
  }
}

export type Uuid = Tag<'uuid'>;

export function isUuid<T extends number>(value: string): value is string & Uuid {
  const regexp = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$', 'i');
  return regexp.test(value);
}
