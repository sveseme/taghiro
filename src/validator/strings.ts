import { Result } from "./results";
import { NonEmpty, isNotEmpty } from "..";
import { validate, ErrorMessage } from "./validator";

export { vNotEmpty };

function vNotEmpty<T extends { length: number }>(
  value: T,
): Result<T & NonEmpty, ErrorMessage> {
  return validate<T, T & NonEmpty>(value, isNotEmpty);
}
