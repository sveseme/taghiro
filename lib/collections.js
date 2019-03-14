"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hasSize(value, size) {
    return value.length == size;
}
exports.hasSize = hasSize;
function hasMinSize(value, minSize) {
    return value.length >= minSize;
}
exports.hasMinSize = hasMinSize;
function hasMaxSize(value, maxSize) {
    return value.length <= maxSize;
}
exports.hasMaxSize = hasMaxSize;
function isEmpty(value) {
    return hasSize(value, 0);
}
exports.isEmpty = isEmpty;
function isNotEmpty(value) {
    return !isEmpty(value);
}
exports.isNotEmpty = isNotEmpty;
