import { Result, Failure, Success, isSuccess, Many } from './results';

export { ErrorMessage, ValidationFailure, validate, withGood };

type ErrorMessage = string;

class ValidationFailure extends Failure<ErrorMessage> {}

function validate<T, U extends T>(v: T, fn: (v: T) => v is U): Result<U, ErrorMessage> {
  if (fn(v)) {
    return new Success((v as unknown) as U);
  } else {
    return new ValidationFailure('Could not validated');
  }
}

// Replace with currying
// https://medium.com/@hernanrajchert/creating-typings-for-curry-using-ts-3-x-956da2780bbf

function withGood<A, E, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  fn: (v1?: T1, v2?: T2, v3?: T3, v4?: T4, v5?: T5, v6?: T6, v7?: T7, v8?: T8, v9?: T9) => A,
  v1?: Result<T1, E>,
  v2?: Result<T2, E>,
  v3?: Result<T3, E>,
  v4?: Result<T4, E>,
  v5?: Result<T5, E>,
  v6?: Result<T6, E>,
  v7?: Result<T7, E>,
  v8?: Result<T8, E>,
  v9?: Result<T9, E>,
): Result<A, E> {
  function value<T, E>(r: Result<T, E> | undefined): T | undefined {
    if (r == undefined) {
      return undefined;
    } else if (isSuccess(r)) {
      return r.value;
    } else {
      return undefined;
    }
  }

  const args = [v1, v2, v3, v4, v5, v6, v7, v8, v9].filter(x => {
    return x !== undefined;
  });
  const allSuccess = (args.length = args.filter(x => x !== undefined && x.isSuccess).length);

  if (allSuccess) {
    return new Success(
      fn(value(v1), value(v2), value(v3), value(v4), value(v5), value(v6), value(v7), value(v8), value(v9)),
    );
  } else {
    return new Many([v1 as Failure<E>, v2 as Failure<E>]);
  }
}
