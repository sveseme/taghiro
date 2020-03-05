"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var results_1 = require("./results");
var ValidationFailure = /** @class */ (function (_super) {
    __extends(ValidationFailure, _super);
    function ValidationFailure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ValidationFailure;
}(results_1.Failure));
exports.ValidationFailure = ValidationFailure;
function validate(v, fn) {
    if (fn(v)) {
        return new results_1.Success(v);
    }
    else {
        return new ValidationFailure("Could not validated");
    }
}
exports.validate = validate;
function vDefined(value) {
    if (value !== undefined) {
        return new results_1.Success(value);
    }
    else {
        return new ValidationFailure("Could not validated");
    }
}
// Replace with currying
// https://medium.com/@hernanrajchert/creating-typings-for-curry-using-ts-3-x-956da2780bbf
function withGood(fn, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
    function value(r) {
        if (r === undefined) {
            return undefined;
        }
        else if (results_1.isSuccess(r)) {
            return r.value;
        }
        else {
            return undefined;
        }
    }
    var args = [v1, v2, v3, v4, v5, v6, v7, v8, v9].filter(function (x) {
        return x !== undefined;
    });
    var allSuccess = (args.length = args.filter(function (x) { return x !== undefined && x.isSuccess; }).length);
    if (allSuccess) {
        return new results_1.Success(fn(value(v1), value(v2), value(v3), value(v4), value(v5), value(v6), value(v7), value(v8), value(v9)));
    }
    else {
        return new results_1.Many([v1, v2]);
    }
}
exports.withGood = withGood;
