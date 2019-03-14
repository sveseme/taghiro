# taghiro

**Tag types for Typescript**

taghiro is a library for tag types in Typescript. Tag types are types with which you can tag other types. taghiro implements them as union types in Typescript. Lets look at an example where we send emails

```typescript
function sendEmails(to:Array<string>, html:string) {
    ....
}
```

Here several things could go wrong. First the `to` array could be empty. Second the `html` could be empty, not contain any HTML or contain unsafe HTML. With tag types we can make sure the paramaters are save.

```typescript
function sendEmails(to:Array<string> & NonEmpty, html:string & NonEmpty) {
    ....
}
```

Now the caller needs to ensure that the paramater satisfy the tag types. taghiro implements this with Typescript type guards.

```typescript
if (isNotEmpty(emails) && isNotEmpty(html)) {
  sendEmails(emails, html);
}
```

There are many different use cases for tag types. At least three use case groups for tag types are

- Constraint (like MinSize, Positive)
- State (like Empty, LoggedIn)
- Semantic (like Netto, CustomerID)

## Supplied tag types

taghiro brings ready to use tag types. The supplied tag types are inspired by the excellent [refined](https://github.com/fthomas/refined) library.

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
- NotZero

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
