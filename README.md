# taghiro

Tag types for Typescript

There are at least three use cases for tag types

- Constraint (like MinSize, Positive)
- State (like Empty, LoggedIn)
- Semantic (like Netto, CustomerID)

## Supplied tag types

taghiro brings ready to use tag types.

### Containers

- Size
- MinSize
- MaxSize
- Empty
- NonEmpty

### Numeric

- IntervalOpen
- IntervalOpenClosed
- IntervalClosedOpen
- IntervalClosed
- Less
- LessEqual
- Greater
- GreaterEqual
- Positive
- NonPositive
- Negative
- NonNegative
- Modulo
- Divisable
- NonDivisable
- Even
- Odd

### Strings

- Digits
- Letters
- LettersOrDigits
- LowerCase
- UpperCase
- EndsWith
- StartsWith
- Uri
- URL
- UUID
- Trimmed
