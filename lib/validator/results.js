"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function isSuccess(arg) {
    return arg.isSuccess();
}
exports.isSuccess = isSuccess;
function isOneFailure(arg) {
    return !arg.isSuccess() && arg.hasMany() === false;
}
exports.isOneFailure = isOneFailure;
function handle(v, f) {
    return __awaiter(this, void 0, void 0, function* () {
        const value = yield v;
        if (value) {
            return new Success(value);
        }
        else {
            return f();
        }
    });
}
exports.handle = handle;
function success(value) {
    return new Success(value);
}
exports.success = success;
class Success {
    constructor(value) {
        this.value = value;
    }
    isSuccess() {
        return true;
    }
    hasMany() {
        return false;
    }
}
exports.Success = Success;
class Failure {
    constructor(error) {
        this.error = error;
    }
    hasMany() {
        return false;
    }
    isSuccess() {
        return false;
    }
    toMany() {
        return new Many([this]);
    }
}
exports.Failure = Failure;
class Many {
    constructor(failures) {
        this.failures = failures;
    }
    static of(f) {
        return new Many([f]);
    }
    isSuccess() {
        return false;
    }
    hasMany() {
        return true;
    }
    toMany() {
        return this;
    }
}
exports.Many = Many;
exports.Failures = Many;
// Mix fail fast and accumulate
// a
// .then((a) => R(b))
// .then((b) => {
//    c = x(b);
//    d = y(b);
//    withGood(c,d, (c,d) => Account(c,b))
// });
