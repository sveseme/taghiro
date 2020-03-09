import {
  EndsWith,
  endingWith,
  Tag,
  Result,
  ErrorMessage,
  validate,
  withGood,
  hasMaxSize,
  isSuccess,
} from "../src/";
import { MinSize, hasMinSize } from "../src/";

function gmailDelete(email: string & EndsWith<"@gmail.com"> & MinSize<15>) {}

const email = " stephan.schmidt@Gmail.com ";
// gmailDelete(email); // would not compile
if (
  endingWith(email, "@gmail.com") &&
  hasMinSize(email, 5) &&
  hasMinSize(email, 16)
) {
  gmailDelete(email);
} else {
  //
}

export type Gmail = Tag<"gmail">;

export function isGmail<T extends string>(
  value: string,
): value is string & Gmail {
  const s = email.trim().toLowerCase();
  return endingWith(s, "@gmail.com") && hasMinSize(s, 5) && hasMaxSize(s, 200);
}

function vGmail(value: string): Result<string & Gmail, ErrorMessage> {
  return validate<string, string & Gmail>(value.toLowerCase().trim(), isGmail);
}

class Person {
  gmail: string & Gmail;
  constructor(gmail: string & Gmail) {
    this.gmail = gmail;
  }
}

const p = withGood((g: string & Gmail) => new Person(g), vGmail(email));
if (isSuccess(p)) {
  // Do something
}

console.log(p);
