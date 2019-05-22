export { Success, Failure, Many, Many as Failures, Result, isOneFailure, isSuccess, handle };
declare function isSuccess<T, E>(arg: Result<T, E>): arg is Success<T>;
declare function isOneFailure<T, E>(arg: Result<T, E>): arg is Failure<E>;
declare function handle<T, E>(v: Promise<T | undefined>, f: () => Failure<E>): Promise<Result<T, E>>;
export declare function success<T, E>(value: T): Result<T, E>;
declare class Success<T> {
    readonly value: T;
    constructor(value: T);
    isSuccess(): boolean;
    hasMany(): boolean;
}
declare class Failure<E> {
    readonly error: E;
    constructor(error: E);
    hasMany(): boolean;
    isSuccess(): boolean;
    toMany(): Many<Failure<E>>;
}
declare class Many<F> {
    readonly failures: Array<F>;
    constructor(failures: Array<F>);
    isSuccess(): boolean;
    hasMany(): boolean;
    static of<F>(f: F): Many<F>;
    toMany(): Many<F>;
}
declare type Result<T, E> = Success<T> | Many<Failure<E>> | Failure<E>;
