"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const results_1 = require("./results");
class ValidationFailure extends results_1.Failure {
}
exports.ValidationFailure = ValidationFailure;
function validate(v, fn) {
    if (fn(v)) {
        return new results_1.Success(v);
    }
    else {
        return new ValidationFailure('Could not validated');
    }
}
exports.validate = validate;
// Replace with currying
// https://medium.com/@hernanrajchert/creating-typings-for-curry-using-ts-3-x-956da2780bbf
function withGood(fn, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
    function value(r) {
        if (r == undefined) {
            return undefined;
        }
        else if (results_1.isSuccess(r)) {
            return r.value;
        }
        else {
            return undefined;
        }
    }
    const args = [v1, v2, v3, v4, v5, v6, v7, v8, v9].filter(x => {
        return x !== undefined;
    });
    const allSuccess = (args.length = args.filter(x => x !== undefined && x.isSuccess).length);
    if (allSuccess) {
        return new results_1.Success(fn(value(v1), value(v2), value(v3), value(v4), value(v5), value(v6), value(v7), value(v8), value(v9)));
    }
    else {
        return new results_1.Many([v1, v2]);
    }
}
exports.withGood = withGood;
