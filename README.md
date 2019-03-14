# taghiro

**Tag types for Typescript**

taghiro is a library for tag types in Typescript. Tag types are types with which you can tag other types. taghiro implements them as union types in Typescript.

## Install

```bash
npm install taghiro
```

## Usage

Lets look at an example where we send emails

```typescript
function sendEmails(to:Array<string>, html:string) {
    ....
}
```

Here several things could go wrong. First the `to` array could be empty. Second the `html` could be empty, not contain any HTML or contain unsafe HTML. With tag types we can make sure the paramaters are save.

```typescript
import { NonEmpty, isNotEmpty } from 'taghiro';

function sendEmails(to:Array<string> & NonEmpty, html:string & NonEmpty) {
    ....
}
```

Now the caller needs to ensure that the paramater satisfy the tag types. taghiro implements this with Typescript type guards.

```typescript
import { NonEmpty, isNotEmpty } from 'taghiro';

if (isNotEmpty(emails) && isNotEmpty(html)) {
  sendEmails(emails, html);
}
```

## Different sort of tag types

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

- Ascii
- Regex
- Digits
- Letters
- LettersOrDigits
- LowerCase
- UpperCase
- Trimmed
- EndsWith
- StartsWith
- Url
- Uuid
- Json
- Base64

## Custom tag types

Tag types can be used to define custom domain concepts. One example is
id. Here is an example based on string Uuid ids.

```typescript
import { Tag, isUuid } from 'taghiro';

export type CustomerId = Tag<'customer-id'>;

export function isCustomerId(value: string): value is string & CustomerId {
  return isUuid(value);
}
```

One can define a custom Tag type to define more than one id tag.

```typescript
import { isUuid } from 'taghiro';

export interface Id<T extends string> {
  readonly __id: T;
}

export type CustomerId = Id<'customer'>;

export function isCustomerId(value: string): value is string & CustomerId {
  return isUuid(value);
}

export type AccountId = Id<'account'>;

export function isAccountId(value: string): value is string & AccountId {
  return isUuid(value);
}
```

## More tag types

taghiro is easy to integrate with more validation libraries for example [Validator](https://www.npmjs.com/package/validator).

```typescript
import { isEmail } from 'validator';
import { Tag } from 'taghiro';

export type Email = Tag<'email'>;

export function isEmail(value: string): value is string & Email {
  return isEmail(value);
}
```

## License (MIT)

```
Copyright (c) 2019 Stephan Schmidt

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
