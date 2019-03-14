import { EndsWith, endsWith } from '../src/taghiro';

function gmailDelete(email: string & EndsWith<'@gmail.com'>) {}

function main() {
  const email = 'stephan.schmidt@gmail.com';
  // gmailDelete(email); // would not compile
  if (endsWith(email, '@gmail.com')) {
    gmailDelete(email);
  } else {
    //
  }
}
