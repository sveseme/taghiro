class Min<T extends number> {
  private __min: T;
}

function min<T extends number, U extends { length: number }>(
  value: U,
  minSize: T,
): value is U & Min<T> {
  return value.length >= minSize;
}

function f1(s: string & Min<10>) {
  return s;
}

function f2(s: string & Min<10> & Min<5>) {
  return s;
}

const s = "1234567890";

if (min(s, 10)) {
  f1(s);
}

if (min(s, 11)) {
  // Does not compile, correct
  // f1(s);
}

if (min(s, 5) && min(s, 10)) {
  f2(s);
}
