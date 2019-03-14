import { Tag } from './tag';
export declare class Regex<T extends string> {
    private __regex;
}
export declare function isRegex<T extends string>(value: string, regex: T): value is string & Regex<T>;
export declare type Accii = Tag<'ascii'>;
export declare function isAscii<T extends number>(value: string): value is string & Uuid;
export declare type Digits = Tag<'digits'>;
export declare function isDigits(value: string): value is string & Digits;
export declare type Letters = Tag<'letters'>;
export declare function isLetters(value: string): value is string & Letters;
export declare type LettersOrDigits = Tag<'letters-or-digits'>;
export declare function isLetterOrDigits(value: string): value is string & LettersOrDigits;
export declare type Trimmed = Tag<'trimmed'>;
export declare function isTrimmed<T extends number>(value: string): value is string & Trimmed;
export declare type LowerCase = Tag<'lowercase'>;
export declare function isLowerCase<T extends number>(value: string): value is string & LowerCase;
export declare type UpperCase = Tag<'uppercase'>;
export declare function isUpperCase<T extends number>(value: string): value is string & LowerCase;
export declare class EndsWith<T extends string> {
    private __endsWith;
}
export declare function endsWith<T extends string>(value: string, endsWith: T): value is string & EndsWith<T>;
export declare class StartsWith<T extends string> {
    private __startsWith;
}
export declare function startsWith<T extends string>(value: string, startsWith: T): value is string & StartsWith<T>;
export declare type Url = Tag<'url'>;
export declare function isUrl(value: string): value is string & LowerCase;
export declare type Uuid = Tag<'uuid'>;
export declare function isUuid(value: string): value is string & Uuid;
export declare type Json = Tag<'json'>;
export declare function isJson(value: string): value is string & Json;
export declare type Base64 = Tag<'base64'>;
export declare function isBase64(value: string): value is string & Base64;
