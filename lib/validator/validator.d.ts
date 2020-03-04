import { Result, Failure } from "./results";
export { ErrorMessage, ValidationFailure, validate, withGood };
declare type ErrorMessage = string;
declare class ValidationFailure extends Failure<ErrorMessage> {
}
declare function validate<T, U extends T>(v: T, fn: (v: T) => v is U): Result<U, ErrorMessage>;
declare function withGood<A, E, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn: (v1?: T1, v2?: T2, v3?: T3, v4?: T4, v5?: T5, v6?: T6, v7?: T7, v8?: T8, v9?: T9) => A, v1?: Result<T1, E>, v2?: Result<T2, E>, v3?: Result<T3, E>, v4?: Result<T4, E>, v5?: Result<T5, E>, v6?: Result<T6, E>, v7?: Result<T7, E>, v8?: Result<T8, E>, v9?: Result<T9, E>): Result<A, E>;
