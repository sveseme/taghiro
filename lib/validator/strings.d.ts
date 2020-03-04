import { Result } from "./results";
import { NonEmpty } from "..";
import { ErrorMessage } from "./validator";
export { vNotEmpty };
declare function vNotEmpty<T extends {
    length: number;
}>(value: T): Result<T & NonEmpty, ErrorMessage>;
