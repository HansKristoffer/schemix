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
exports.PrismaRelationalField = void 0;
var PrismaRelationalField = /** @class */ (function () {
    function PrismaRelationalField(name, type) {
        this.name = name;
        this.type = type;
        this.relationAttributes = new Map();
        this.attributes = new Map();
        this.modifier = "";
        this.rawAttributeString = "";
        this.comments = [];
    }
    PrismaRelationalField.prototype.parseRelationAttribute = function () {
        var relationAttributes = this.relationAttributes;
        if (!relationAttributes.size)
            return;
        var relationString = __spreadArray([], __read(relationAttributes.entries()), false).map(function (entries) { return entries.join(": "); })
            .join(", ");
        return "@relation(".concat(relationString, ")");
    };
    PrismaRelationalField.prototype.setFields = function (tokens) {
        this.relationAttributes.set("fields", "[".concat(tokens.join(", "), "]"));
        return this;
    };
    PrismaRelationalField.prototype.setName = function (targetName) {
        this.relationAttributes.set("name", "\"".concat(targetName, "\""));
        return this;
    };
    PrismaRelationalField.prototype.setReferences = function (tokens) {
        this.relationAttributes.set("references", "[".concat(tokens.join(", "), "]"));
        return this;
    };
    PrismaRelationalField.prototype.setOnDelete = function (action) {
        this.relationAttributes.set("onDelete", action);
        return this;
    };
    PrismaRelationalField.prototype.setOnUpdate = function (action) {
        this.relationAttributes.set("onUpdate", action);
        return this;
    };
    PrismaRelationalField.prototype.setMap = function (action) {
        this.relationAttributes.set("map", action);
        return this;
    };
    PrismaRelationalField.prototype.setOptional = function () {
        this.modifier = "?";
        return this;
    };
    PrismaRelationalField.prototype.setList = function () {
        this.modifier = "[]";
        return this;
    };
    PrismaRelationalField.prototype.setRawAttributes = function (rawAttributeString) {
        this.rawAttributeString = rawAttributeString;
        return this;
    };
    PrismaRelationalField.prototype.setComments = function (comments) {
        this.comments = comments;
        return this;
    };
    PrismaRelationalField.prototype.toFieldData = function () {
        return {
            comments: this.comments,
            tokens: this.toTokenArray(),
        };
    };
    PrismaRelationalField.prototype.toTokenArray = function () {
        var _a = this, name = _a.name, type = _a.type, modifier = _a.modifier, attributes = _a.attributes, rawAttributeString = _a.rawAttributeString;
        var parsedRelationAttribute = this.parseRelationAttribute();
        return __spreadArray(__spreadArray([
            name,
            type + modifier
        ], __read((parsedRelationAttribute ? [parsedRelationAttribute] : [])), false), __read(__spreadArray(__spreadArray([], __read(attributes.values()), false), [rawAttributeString], false)), false);
    };
    return PrismaRelationalField;
}());
exports.PrismaRelationalField = PrismaRelationalField;
