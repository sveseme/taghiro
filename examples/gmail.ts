import { EndsWith, endsWith } from '../src/';
import { MinSize, hasMinSize } from '../src/';

function gmailDelete(email: string & EndsWith<'@gmail.com'> & MinSize<15>) {}

function main() {
  const email = 'stephan.schmidt@gmail.com';
  // gmailDelete(email); // would not compile
  if (endsWith(email, '@gmail.com') && hasMinSize(email, 15)) {
    gmailDelete(email);
  } else {
    //
  }
}
