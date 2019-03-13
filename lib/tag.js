"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEmpty(value) {
    return value.length == 0;
}
function isNotEmpty(value) {
    return !isEmpty(value);
}
function hasSize(value, size) {
    return value.length == size;
}
function hasMinSize(value, minSize) {
    return value.length >= minSize;
}
exports.hasMinSize = hasMinSize;
function hasMaxSize(value, maxSize) {
    return value.length <= maxSize;
}
function hasMinValue(value, minValue) {
    return value >= minValue;
}
exports.hasMinValue = hasMinValue;
// EndsWith type guard
function endsWith(value, endsWith) {
    return value.endsWith(endsWith);
}
function gmailDelete(email) { }
function main() {
    var email = "stephan@gmail.com";
    // gmailDelete(email); // would not compile
    if (endsWith(email, "@gmail.com")) {
        gmailDelete(email);
    }
    else {
        //
    }
}
function Positive(n) {
    return n;
}
