"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isSorted(a) {
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] > a[i + 1]) {
            return false;
        }
    }
    return true;
}
exports.isSorted = isSorted;
function isUnsorted(a) {
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] > a[i + 1]) {
            return true;
        }
    }
    return false;
}
exports.isUnsorted = isUnsorted;
function hasSize(value, size) {
    return value.length === size;
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
