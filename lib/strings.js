"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numeric_1 = require("./numeric");
function isRegex(value, regex) {
    const regexp = new RegExp(regex);
    return regexp.test(value);
}
exports.isRegex = isRegex;
function isAscii(value) {
    const regexp = new RegExp('^[\x00-\x7F]+$');
    return regexp.test(value);
}
exports.isAscii = isAscii;
function isDigits(value) {
    return isRegex(value, '^\\d*$');
}
exports.isDigits = isDigits;
function isLetters(value) {
    return isRegex(value, '^[a-zA-Z]+$');
}
exports.isLetters = isLetters;
function isLetterOrDigits(value) {
    return isRegex(value, '^[\\da-zA-Z]+$');
}
exports.isLetterOrDigits = isLetterOrDigits;
function isTrimmed(value) {
    return value.trim() == value;
}
exports.isTrimmed = isTrimmed;
function isLowerCase(value) {
    return value.toLowerCase() == value;
}
exports.isLowerCase = isLowerCase;
function isUpperCase(value) {
    return value.toUpperCase() == value;
}
exports.isUpperCase = isUpperCase;
function endsWith(value, endsWith) {
    return value.endsWith(endsWith);
}
exports.endsWith = endsWith;
function startsWith(value, startsWith) {
    return value.startsWith(startsWith);
}
exports.startsWith = startsWith;
function isUrl(value) {
    try {
        new URL(value);
        return true;
    }
    catch (_) {
        return false;
    }
}
exports.isUrl = isUrl;
function isUuid(value) {
    const regexp = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$', 'i');
    return regexp.test(value);
}
exports.isUuid = isUuid;
function isJson(value) {
    try {
        const result = JSON.parse(value);
        return !!result && typeof result === 'object';
    }
    catch (e) {
        return false;
    }
}
exports.isJson = isJson;
function isBase64(value) {
    return numeric_1.isDivisible(0, 4) && isRegex(value, '^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$');
}
exports.isBase64 = isBase64;
