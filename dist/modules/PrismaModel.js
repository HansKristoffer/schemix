"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaModel = void 0;
var PrismaEnumField_1 = require("../modules/PrismaEnumField");
var PrismaScalarField_1 = require("../modules/PrismaScalarField");
var PrismaRelationalField_1 = require("../modules/PrismaRelationalField");
var options_1 = require("../util/options");
var parse_1 = require("../util/parse");
var PrismaModel = /** @class */ (function () {
    function PrismaModel(name, schema) {
        this.name = name;
        this.schema = schema;
        this.fields = new Map();
        this.blockAttributes = [];
        this.rawFields = [];
        this.comments = [];
    }
    PrismaModel.prototype.comment = function () {
        var _a;
        var comments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            comments[_i] = arguments[_i];
        }
        (_a = this.comments).push.apply(_a, __spreadArray([], __read(comments), false));
        return this;
    };
    PrismaModel.prototype.string = function (fieldName, options) {
        return this.createField(fieldName, "String", options);
    };
    PrismaModel.prototype.int = function (fieldName, options) {
        return this.createField(fieldName, "Int", options);
    };
    PrismaModel.prototype.bigInt = function (fieldName, options) {
        return this.createField(fieldName, "BigInt", options);
    };
    PrismaModel.prototype.decimal = function (fieldName, options) {
        var _a, _b;
        if (options === null || options === void 0 ? void 0 : options.precision) {
            var rawAttributes = (_b = (_a = options.raw) === null || _a === void 0 ? void 0 : _a.split(" ")) !== null && _b !== void 0 ? _b : [];
            rawAttributes === null || rawAttributes === void 0 ? void 0 : rawAttributes.push("@database.Decimal(".concat(options.precision.join(", "), ")"));
            options.raw = rawAttributes.join(" ");
        }
        return this.createField(fieldName, "Decimal", options);
    };
    PrismaModel.prototype.float = function (fieldName, options) {
        return this.createField(fieldName, "Float", options);
    };
    PrismaModel.prototype.boolean = function (fieldName, options) {
        return this.createField(fieldName, "Boolean", options);
    };
    PrismaModel.prototype.dateTime = function (fieldName, options) {
        return this.createField(fieldName, "DateTime", options);
    };
    PrismaModel.prototype.json = function (fieldName, options) {
        var parsedDefault = (options === null || options === void 0 ? void 0 : options.default)
            ? (0, parse_1.parseStringOrObject)(options === null || options === void 0 ? void 0 : options.default)
            : undefined;
        var newOptions = parsedDefault
            ? __assign(__assign({}, options), { default: parsedDefault })
            : options;
        return this.createField(fieldName, "Json", newOptions);
    };
    PrismaModel.prototype.enum = function (fieldName, prismaEnum, options) {
        return this.createEnumField(fieldName, prismaEnum.name, options);
    };
    PrismaModel.prototype.relation = function (fieldName, model, options) {
        return this.createRelation(fieldName, model, options);
    };
    PrismaModel.prototype.id = function (options) {
        this.raw((0, options_1.buildCompositeId)(options));
        return this;
    };
    PrismaModel.prototype.unique = function (options) {
        this.raw((0, options_1.buildCompositeUnique)(options));
        return this;
    };
    PrismaModel.prototype.map = function (options) {
        this.raw((0, options_1.buildModelMap)(options));
        return this;
    };
    PrismaModel.prototype.mixin = function (model) {
        var _this = this;
        setImmediate(function () {
            var _a, _b, _c;
            __spreadArray([], __read(model.fields.entries()), false).map(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                return _this.fields.set(key, value);
            });
            (_a = _this.comments).push.apply(_a, __spreadArray([], __read(model.comments), false));
            (_b = _this.rawFields).push.apply(_b, __spreadArray([], __read(model.rawFields), false));
            (_c = _this.blockAttributes).push.apply(_c, __spreadArray([], __read(model.blockAttributes), false));
        });
        return this;
    };
    PrismaModel.prototype.raw = function (fieldText) {
        if (fieldText.startsWith("@@"))
            this.blockAttributes.push(fieldText);
        else
            this.rawFields.push(fieldText);
        return this;
    };
    PrismaModel.prototype.extend = function (name) {
        var clone = this.schema
            ? this.schema.createModel(name)
            : new PrismaModel(name);
        clone.fields = this.fields;
        clone.rawFields = this.rawFields;
        return clone;
    };
    PrismaModel.prototype.toString = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setImmediate(function () {
                resolve(__spreadArray(__spreadArray([], __read(_this.comments), false), [
                    "model ".concat(_this.name, " {"),
                    _this.parseFields(),
                    "}",
                ], false).join("\n"));
            });
        });
    };
    PrismaModel.prototype.createRelation = function (fieldName, model, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (!model.name)
            return this;
        var field = new PrismaRelationalField_1.PrismaRelationalField(fieldName, model.name);
        (0, options_1.handleRelationalOptions)(field, options);
        setImmediate(function () { return _this.fields.set(fieldName, field); });
        return this;
    };
    PrismaModel.prototype.createEnumField = function (fieldName, type, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var field = new PrismaEnumField_1.PrismaEnumField(fieldName, type);
        (0, options_1.handleEnumOptions)(field, options);
        setImmediate(function () { return _this.fields.set(fieldName, field); });
        return this;
    };
    PrismaModel.prototype.createField = function (fieldName, type, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var field = new PrismaScalarField_1.PrismaScalarField(fieldName, type);
        (0, options_1.handleScalarOptions)(field, options);
        setImmediate(function () { return _this.fields.set(fieldName, field); });
        return this;
    };
    PrismaModel.prototype.parseFields = function () {
        var e_1, _a;
        var fields = __spreadArray([], __read(this.fields.values()), false).map(function (field) {
            return field.toFieldData();
        });
        var mostTokens = Math.max.apply(Math, __spreadArray([], __read(fields.map(function (_a) {
            var tokens = _a.tokens;
            return tokens.length;
        })), false));
        var paddings = Array(mostTokens).fill(0);
        for (var i = 0; i < mostTokens; i++)
            try {
                for (var fields_1 = (e_1 = void 0, __values(fields)), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                    var tokens = fields_1_1.value.tokens;
                    if (!tokens[i])
                        continue;
                    else
                        paddings[i] =
                            tokens[i].length > paddings[i] ? tokens[i].length : paddings[i];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        return __spreadArray(__spreadArray(__spreadArray([], __read(fields.map(function (_a) {
            var tokens = _a.tokens, comments = _a.comments;
            return __spreadArray(__spreadArray([], __read(comments.map(function (comment) { return "  " + comment; })), false), [
                "  " +
                    tokens
                        .map(function (token, index) { return token.padEnd(paddings[index]); })
                        .join(" ")
                        .trim(),
            ], false).join("\n");
        })), false), __read(this.rawFields.map(function (rawField) { return "  " + rawField; })), false), __read((this.blockAttributes.length
            ? __spreadArray([
                ""
            ], __read(this.blockAttributes.map(function (blockAttribute) { return "  " + blockAttribute; })), false) : [])), false).join("\n");
    };
    return PrismaModel;
}());
exports.PrismaModel = PrismaModel;
