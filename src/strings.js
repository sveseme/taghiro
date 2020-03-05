"use strict";
exports.__esModule = true;
var numeric_1 = require("./numeric");
function isRegex(value, regex) {
    var regexp = new RegExp(regex);
    return regexp.test(value);
}
exports.isRegex = isRegex;
function isAscii(value) {
    var regexp = new RegExp("^[\x00-\x7F]+$");
    return regexp.test(value);
}
exports.isAscii = isAscii;
function isDigits(value) {
    return isRegex(value, "^\\d*$");
}
exports.isDigits = isDigits;
function isLetters(value) {
    return isRegex(value, "^[a-zA-Z]+$");
}
exports.isLetters = isLetters;
function isLetterOrDigits(value) {
    return isRegex(value, "^[\\da-zA-Z]+$");
}
exports.isLetterOrDigits = isLetterOrDigits;
function isTrimmed(value) {
    return value.trim() === value;
}
exports.isTrimmed = isTrimmed;
function isLowerCase(value) {
    return value.toLowerCase() === value;
}
exports.isLowerCase = isLowerCase;
function isUpperCase(value) {
    return value.toUpperCase() === value;
}
exports.isUpperCase = isUpperCase;
function endingWith(value, endsWith) {
    return value.endsWith(endsWith);
}
exports.endingWith = endingWith;
function startingWith(value, startsWith) {
    return value.startsWith(startsWith);
}
exports.startingWith = startingWith;
function isUrl(value) {
    try {
        var url = new URL(value);
        return true;
    }
    catch (_) {
        return false;
    }
}
exports.isUrl = isUrl;
function isUuid(value) {
    var regexp = new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$", "i");
    return regexp.test(value);
}
exports.isUuid = isUuid;
function isJson(value) {
    try {
        var result = JSON.parse(value);
        return !!result && typeof result === "object";
    }
    catch (e) {
        return false;
    }
}
exports.isJson = isJson;
function isBase64(value) {
    return (numeric_1.isDivisible(0, 4) &&
        isRegex(value, "^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$"));
}
exports.isBase64 = isBase64;
