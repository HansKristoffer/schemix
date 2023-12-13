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
exports.PrismaScalarField = void 0;
var PrismaScalarField = /** @class */ (function () {
    function PrismaScalarField(name, type) {
        this.name = name;
        this.type = type;
        this.attributes = new Map();
        this.modifier = "";
        this.rawAttributeString = "";
        this.comments = [];
    }
    PrismaScalarField.prototype.setOptional = function () {
        this.modifier = "?";
        return this;
    };
    PrismaScalarField.prototype.setList = function () {
        this.modifier = "[]";
        return this;
    };
    PrismaScalarField.prototype.setAsId = function () {
        this.attributes.set("id", "@id");
        return this;
    };
    PrismaScalarField.prototype.setUnique = function () {
        this.attributes.set("unique", "@unique");
        return this;
    };
    PrismaScalarField.prototype.setToUpdatedAt = function () {
        this.attributes.set("updatedAt", "@updatedAt");
        return this;
    };
    PrismaScalarField.prototype.setDefault = function (defaultValue) {
        var _this = this;
        var setDefaultValue = function (value) {
            return _this.attributes.set("default", "@default(".concat(value, ")"));
        };
        switch (typeof defaultValue) {
            case "object":
                var _a = __read(Object.entries(defaultValue).find(function (_a) {
                    var _b = __read(_a, 2), value = _b[1];
                    return value;
                }) || [], 1), prismaFunc = _a[0];
                setDefaultValue("".concat(prismaFunc, "()"));
                break;
            case "string":
                setDefaultValue("\"".concat(defaultValue, "\""));
                break;
            default:
                setDefaultValue(defaultValue.toString());
        }
        return this;
    };
    PrismaScalarField.prototype.setIgnore = function () {
        this.attributes.set("ignore", "@ignore");
        return this;
    };
    PrismaScalarField.prototype.mapTo = function (fieldName) {
        this.attributes.set("map", "@map(\"".concat(fieldName, "\")"));
        return this;
    };
    PrismaScalarField.prototype.setRawAttributes = function (rawAttributeString) {
        this.rawAttributeString = rawAttributeString;
        return this;
    };
    PrismaScalarField.prototype.setComments = function (comments) {
        this.comments = comments;
        return this;
    };
    PrismaScalarField.prototype.toFieldData = function () {
        return {
            comments: this.comments,
            tokens: this.toTokenArray(),
        };
    };
    PrismaScalarField.prototype.toTokenArray = function () {
        var _a = this, name = _a.name, type = _a.type, modifier = _a.modifier, attributes = _a.attributes, rawAttributeString = _a.rawAttributeString;
        return [
            name,
            type + modifier,
            __spreadArray(__spreadArray([], __read(attributes.values()), false), [rawAttributeString], false).join(" "),
        ];
    };
    return PrismaScalarField;
}());
exports.PrismaScalarField = PrismaScalarField;
