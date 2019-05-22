import { ErrorMessage, Result, vNotEmpty, withGood, Success, NonEmpty } from '../src';

describe('Validator', () => {
  it('should validate all successes to Success', async () => {
    const r: Result<string, ErrorMessage> = withGood(
      (s1: string & NonEmpty, s2: string & NonEmpty) => s1 + s2,
      vNotEmpty('hello'),
      vNotEmpty('world'),
    );
    expect((r as Success<string>).value).toEqual('helloworld');
  });
});
