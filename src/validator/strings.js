"use strict";
exports.__esModule = true;
var __1 = require("..");
var validator_1 = require("./validator");
function vNotEmpty(value) {
    return validator_1.validate(value, __1.isNotEmpty);
}
exports.vNotEmpty = vNotEmpty;
