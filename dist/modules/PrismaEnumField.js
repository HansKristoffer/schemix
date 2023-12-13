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
exports.PrismaEnumField = void 0;
var PrismaEnumField = /** @class */ (function () {
    function PrismaEnumField(name, type) {
        this.name = name;
        this.type = type;
        this.attributes = new Map();
        this.modifier = "";
        this.rawAttributeString = "";
        this.comments = [];
    }
    PrismaEnumField.prototype.setOptional = function () {
        this.modifier = "?";
        return this;
    };
    PrismaEnumField.prototype.setList = function () {
        this.modifier = "[]";
        return this;
    };
    PrismaEnumField.prototype.setUnique = function () {
        this.attributes.set("unique", "@unique");
        return this;
    };
    PrismaEnumField.prototype.setDefault = function (defaultValue) {
        this.attributes.set("default", "@default(".concat(defaultValue, ")"));
        return this;
    };
    PrismaEnumField.prototype.mapTo = function (fieldName) {
        this.attributes.set("map", "@map(\"".concat(fieldName, "\")"));
        return this;
    };
    PrismaEnumField.prototype.setRawAttributes = function (rawAttributeString) {
        this.rawAttributeString = rawAttributeString;
        return this;
    };
    PrismaEnumField.prototype.setComments = function (comments) {
        this.comments = comments;
        return this;
    };
    PrismaEnumField.prototype.toFieldData = function () {
        return {
            comments: this.comments,
            tokens: this.toTokenArray(),
        };
    };
    PrismaEnumField.prototype.toTokenArray = function () {
        var _a = this, name = _a.name, type = _a.type, modifier = _a.modifier, attributes = _a.attributes, rawAttributeString = _a.rawAttributeString;
        return __spreadArray([
            name,
            type + modifier
        ], __read(__spreadArray(__spreadArray([], __read(attributes.values()), false), [rawAttributeString], false)), false);
    };
    return PrismaEnumField;
}());
exports.PrismaEnumField = PrismaEnumField;
