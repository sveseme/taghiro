import { hasMinValue } from '../src/tag'

test('adds 1 + 2 to equal 3', () => {  
  const x = 3
  expect(hasMinValue(x, 3)).toBe(false);
});
