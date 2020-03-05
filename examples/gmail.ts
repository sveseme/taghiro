import { EndsWith, endingWith } from "../src/";
import { MinSize, hasMinSize } from "../src/";

function gmailDelete(email: string & EndsWith<"@gmail.com"> & MinSize<15>) {}

const email = "stephan.schmidt@gmail.com";
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
