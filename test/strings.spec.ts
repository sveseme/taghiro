import { isDigits, isLetters, isUrl } from '../src/taghiro';

test('isDigits returns true for strings of digits', () => {
  const v = '123';
  expect(isDigits(v)).toBe(true);
});

test('isDigits returns false for strings with a letter', () => {
  const v = '123a';
  expect(isDigits(v)).toBe(false);
});

test('isLetters returns true for strings of letters', () => {
  const v = 'abc';
  expect(isLetters(v)).toBe(true);
});

test('isLetters returns false for strings with a number', () => {
  const v = 'abc1';
  expect(isLetters(v)).toBe(false);
});

test('isUrl returns true for urls', () => {
  expect(isUrl('http://www.github.com')).toBe(true);
});

test('isUrl returns true for incorrect urls', () => {
  expect(isUrl('abc')).toBe(false);
});
