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
exports.parseKeyValueBlock = void 0;
/**
 * Takes an object and turns it into a valid key-value block.
 * @param keyword The keyword for the block.
 * @param name The name of the block.
 * @param entries An object containing the entries.
 * @returns The key-value block string.
 */
var parseKeyValueBlock = function (keyword, name, entries) {
    var tokenPadding = Math.max.apply(Math, __spreadArray([], __read(entries.map(function (_a) {
        var _b = __read(_a, 1), key = _b[0];
        return key.length;
    })), false));
    var body = entries
        .map(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        if (key === "url" && typeof value !== "string" && "env" in value) {
            return "  ".concat(key.padEnd(tokenPadding), " = env(\"").concat(value.env, "\")");
        }
        if (key === "directUrl" && typeof value !== "string" && "env" in value) {
            return "  ".concat(key.padEnd(tokenPadding), " = env(\"").concat(value.env, "\")");
        }
        if (key === "shadowDatabaseUrl" &&
            typeof value !== "string" &&
            "env" in value) {
            return "  ".concat(key.padEnd(tokenPadding), " = env(\"").concat(value.env, "\")");
        }
        if (key === "extensions" && Array.isArray(value)) {
            return "  ".concat(key.padEnd(tokenPadding), " = [").concat(value.join(", "), "]");
        }
        return typeof value === "string"
            ? "  ".concat(key.padEnd(tokenPadding), " = \"").concat(value, "\"")
            : "  ".concat(key.padEnd(tokenPadding), " = ").concat(JSON.stringify(value));
    })
        .join("\n");
    return ["".concat(keyword, " ").concat(name, " {"), body, "}"].join("\n");
};
exports.parseKeyValueBlock = parseKeyValueBlock;
