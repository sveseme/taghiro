"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isInOpenInterval(value, minValue, maxValue) {
    return value > minValue && value < maxValue;
}
exports.isInOpenInterval = isInOpenInterval;
function isInClosedInterval(value, minValue, maxValue) {
    return value >= minValue && value <= maxValue;
}
exports.isInClosedInterval = isInClosedInterval;
function isInRange(value, minValue, maxValue) {
    return isInClosedInterval(value, minValue, maxValue);
}
exports.isInRange = isInRange;
function isInOpenClosedInterval(value, minValue, maxValue) {
    return value > minValue && value <= maxValue;
}
exports.isInOpenClosedInterval = isInOpenClosedInterval;
function isInClosedOpenInterval(value, minValue, maxValue) {
    return value >= minValue && value < maxValue;
}
exports.isInClosedOpenInterval = isInClosedOpenInterval;
function greaterEqualThan(value, minValue) {
    return value >= minValue;
}
exports.greaterEqualThan = greaterEqualThan;
function greaterThan(value, minValue) {
    return value > minValue;
}
exports.greaterThan = greaterThan;
function lessEqualThan(value, maxValue) {
    return value <= maxValue;
}
exports.lessEqualThan = lessEqualThan;
function lessThan(value, maxValue) {
    return value < maxValue;
}
exports.lessThan = lessThan;
function positive(value) {
    return value > 0;
}
exports.positive = positive;
function negative(value) {
    return value < 0;
}
exports.negative = negative;
function nonPositive(value) {
    return !positive(value);
}
exports.nonPositive = nonPositive;
function nonNegative(value) {
    return !negative(value);
}
exports.nonNegative = nonNegative;
function isModulo(value, m1, m2) {
    return value % m1 === m2;
}
exports.isModulo = isModulo;
function isDivisible(value, d) {
    return isModulo(value, d, 0);
}
exports.isDivisible = isDivisible;
function isNotDivisible(value, d) {
    return !isDivisible(value, d);
}
exports.isNotDivisible = isNotDivisible;
function isOdd(value) {
    return isNotDivisible(value, 2);
}
exports.isOdd = isOdd;
function isEven(value) {
    return isDivisible(value, 2);
}
exports.isEven = isEven;
function isNotZero(value) {
    return value !== 0;
}
exports.isNotZero = isNotZero;
