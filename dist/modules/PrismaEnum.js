"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaEnum = void 0;
var options_1 = require("../util/options");
var PrismaEnum = /** @class */ (function () {
    function PrismaEnum(name) {
        this.name = name;
        this.enumMap = new Map();
        this.blockAttributes = [];
    }
    PrismaEnum.prototype.addValue = function (value, options) {
        this.enumMap.set(value, options === null || options === void 0 ? void 0 : options.map);
        return this;
    };
    PrismaEnum.prototype.map = function (options) {
        this.blockAttributes.push((0, options_1.buildModelMap)(options));
        return this;
    };
    PrismaEnum.prototype.toString = function () {
        var enumMap = this.enumMap;
        var entries = __spreadArray([], __read(enumMap.entries()), false);
        var padding = entries.reduce(function (accumulator, _a) {
            var _b = __read(_a, 1), length = _b[0].length;
            return length > accumulator ? length : accumulator;
        }, 0);
        var lines = entries
            .map(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            if (!value)
                return "  ".concat(key);
            return "  " + [key.padEnd(padding), " @map(\"".concat(value, "\")")].join(" ");
        })
            .join("\n");
        return __spreadArray(__spreadArray([
            "enum ".concat(this.name, " {"),
            lines
        ], __read((this.blockAttributes.length
            ? __spreadArray([
                ""
            ], __read(this.blockAttributes.map(function (blockAttribute) { return "  " + blockAttribute; })), false) : [])), false), [
            "}",
        ], false).join("\n");
    };
    return PrismaEnum;
}());
exports.PrismaEnum = PrismaEnum;
