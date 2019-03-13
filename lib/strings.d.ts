import { Tag } from './tag';
export declare type Trimmed = Tag<'trimmed'>;
export declare class EndsWith<T extends string> {
    private __endsWith;
}
export declare function endsWith<T extends string>(value: string, endsWith: T): value is string & EndsWith<T>;
