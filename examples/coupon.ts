import { Tag, LessEqual, lessEqualThan } from '../src';

// -------
// Example: Validation inside function

// percentage
//    Integer not Float
//    0 - 100
//    max 80 for coupon
function handle1(param: string) {
  const n = Number.parseInt(param);
  if (Number.isNaN(n)) {
    // return error
  } else {
    var product: string;
    try {
      product = buy1(n);
    } catch (e) {
      // Mixed
      // Input validation error
      // Business error
    }
    if (product) {
      decreaseInventory1(product);
    }
  }
}

function buy1(percentage: number): string {
  // Validation handling
  if (!Number.isInteger(percentage) || percentage < 0 || percentage > 100) {
    throw 'Not an valid percentege ' + percentage;
  }

  if (percentage > 80) {
    throw 'Rebate above 80%';
  }

  // do our logic
  return 'ABC123';
}

function decreaseInventory1(product: string) {
  if (product.length !== 6) {
    // error
  }
  // do our logic
}

// -------
// Example: Validation inside function

// percentage
//    Integer not Float
//    0 - 100
//    max 80 for coupon
function handle2(param: number) {
  const result = buy2(param);

  if (result.error) {
    // Mixed
    // Input validation error
    // Business error
  } else {
    decreaseInventory2(result.product);
    // ok with
  }
}

function buy2(percentage: number): { product?: string; error?: string } {
  // Validation handling
  if (!Number.isInteger(percentage) || percentage < 0 || percentage > 100) {
    return { error: 'Not an valid percentage ' + percentage };
  }

  if (percentage > 80) {
    return { error: 'Rebate above 80%: ' + percentage };
  }

  // do our logic
  return { product: 'ABC123' };
}

function decreaseInventory2(product: string) {
  if (product.length !== 6) {
    // error
  }
  // do our logic
}

// -------
// Example: Duplicated Validation

//   percentage
//    Integer not Float
//    0 - 100
//    max 80 for coupon
function handle3(param: number) {
  if (!Number.isInteger(param) || param < 0 || param > 100) {
    // Input validation error
  }

  const result = buy2(param);

  if (result.error) {
    // Mixed
    // Input validation error
    // Business error
  } else {
    // ok
    decreaseInventory3(result.product);
  }
}

function buy3(percentage: number): { product?: string; error?: string } {
  // Validation handling
  if (!Number.isInteger(percentage) || percentage < 0 || percentage > 100) {
    return { error: 'Not an valid percentage ' + percentage };
  }

  if (percentage > 80) {
    return { error: 'Rebate above 80%: ' + percentage };
  }

  // do our logic
  return { product: 'ABC123' };
}

function decreaseInventory3(product: string) {
  if (product.length !== 6) {
    // error
  }
  // do our logic
}

// -------
// Example: Validation with function

export type Percentage = Tag<'percentage'>;
export type ProductId = Tag<'product-id'>;

// Resusable validation logic
export function isPercentage<T extends number>(value: number): value is number & Percentage {
  return value >= 0 && value <= 100 && Number.isInteger(value);
}

// percentage
//    Integer not Float
//    0 - 100
//    max 80 for coupon
function handle4(param: number) {
  if (isPercentage(param) && lessEqualThan(param, 80)) {
    const product = buy4(param);
    // Business error handling
    decreaseInventory4(product);
  } else {
    // Validation error
  }
}

function buy4(percentage: number & Percentage & LessEqual<80>): string & ProductId {
  // do our logic
  // we know this is a product id
  return 'ABC123' as string & ProductId;
}

function decreaseInventory4(product: string & ProductId) {
  // do our logic
}
