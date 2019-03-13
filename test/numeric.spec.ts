import { lessEqualThan } from '../src/taghiro'

test('lessEqualThan returns true for equal values', () => {  
  const v = 3
  expect(lessEqualThan(v, 3)).toBe(true);
});

test('lessEqualThan returns true for less values', () => {  
  const v = 2
  expect(lessEqualThan(v, 3)).toBe(true);
});

test('lessEqualThan returns false if greater value', () => {  
  const v = 5
  expect(lessEqualThan(v, 3)).toBe(false);
});
