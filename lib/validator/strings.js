"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const validator_1 = require("./validator");
function vNotEmpty(value) {
    return validator_1.validate(value, __1.isNotEmpty);
}
exports.vNotEmpty = vNotEmpty;
