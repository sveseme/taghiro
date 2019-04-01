import { Tag, LessEqual, lessEqualThan } from '../src';
import { stringLiteral } from '@babel/types';

// -------
// Example: Validation inside function

function handle1(param: string) {
  // percentage
  //    Integer not Float
  //    0 - 100
  //    max 80 for coupon

  const n = Number.parseInt(param);
  if (Number.isNaN(n)) {
    // return error
  } else {
    try {
      buy1(n);
    } catch (e) {
      // Handle this is not a percentage
    }
  }
}

function buy1(percentage: number) {
  // error
  if (!Number.isInteger(percentage) || percentage < 0 || percentage > 100) {
    throw 'Not an valid percentege ' + percentage;
  }

  if (percentage > 80) {
    throw 'Rebate above 80%';
  }

  // do our logic
}

// -------
// Example: Validation inside function

function handle2(param: number) {
  // percentage
  //    Integer not Float
  //    0 - 100
  //    max 80 for coupon

  const result = buy2(param);

  if (result.error) {
    // handle error
  } else {
    // ok with
  }
}

function buy2(percentage: number): { coupon?: string; error?: string } {
  // error
  if (!Number.isInteger(percentage) || percentage < 0 || percentage > 100) {
    return { error: 'Not an valid percentage ' + percentage };
  }

  if (percentage > 80) {
    return { error: 'Rebate above 80%: ' + percentage };
  }

  // do our logic
  return { coupon: 'Ok' };
}

// -------
// Example: Validation with function

export type Percentage = Tag<'percentage'>;

export function isPercentage<T extends number>(value: number): value is number & Percentage {
  return value >= 0 && value <= 100 && Number.isInteger(value);
}

function handle3(param: number) {
  // percentage
  //    Integer not Float
  //    0 - 100
  //    max 80 for coupon

  if (isPercentage(param) && lessEqualThan(param, 80)) {
    buy3(param);
    // our logic
  } else {
    // error
  }
}

function buy3(percentage: number & Percentage & LessEqual<80>) {
  // do our logic
}
