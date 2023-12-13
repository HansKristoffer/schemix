"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildModelMap = exports.buildCompositeUnique = exports.buildCompositeId = exports.handleEnumOptions = exports.handleRelationalOptions = exports.handleScalarOptions = void 0;
/**
 * Manipulates the `PrismaScalarField` based on the options provided.
 * @param field THe prisma scalar field object.
 * @param options The options object.
 */
var handleScalarOptions = function (field, options) {
    var e_1, _a;
    var keyBlacklist = ["precision"];
    var propertyMap = {
        id: "setAsId",
        optional: "setOptional",
        list: "setList",
        unique: "setUnique",
        default: "setDefault",
        map: "mapTo",
        updatedAt: "setToUpdatedAt",
        raw: "setRawAttributes",
        comments: "setComments",
        ignore: "setIgnore",
    };
    try {
        for (var _b = __values(Object.entries(options)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
            if (!keyBlacklist.includes(key))
                field[propertyMap[key]](value);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
};
exports.handleScalarOptions = handleScalarOptions;
/**
 * Manipulates the `PrismaRelationField` based on the options provided.
 * @param field The prisma relational field object.
 * @param options The options object.
 */
var handleRelationalOptions = function (field, options) {
    var e_2, _a;
    var _b;
    var propertyMap = {
        optional: "setOptional",
        list: "setList",
        map: "setMap",
        fields: "setFields",
        name: "setName",
        references: "setReferences",
        onDelete: "setOnDelete",
        onUpdate: "setOnUpdate",
        raw: "setRawAttributes",
        comments: "setComments",
    };
    try {
        for (var _c = __values(Object.entries(options)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
            (_b = field[propertyMap[key]]) === null || _b === void 0 ? void 0 : _b.call(field, value);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_2) throw e_2.error; }
    }
};
exports.handleRelationalOptions = handleRelationalOptions;
/**
 * Manipulates the `PrismaEnumField` based on the options provided.
 * @param field The prisma enum field object.
 * @param options The options object.
 */
var handleEnumOptions = function (field, options) {
    var e_3, _a;
    var _b;
    var propertyMap = {
        default: "setDefault",
        optional: "setOptional",
        list: "setList",
        unique: "setUnique",
        map: "mapTo",
        raw: "setRawAttributes",
        comments: "setComments",
    };
    try {
        for (var _c = __values(Object.entries(options)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
            (_b = field[propertyMap[key]]) === null || _b === void 0 ? void 0 : _b.call(field, value);
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_3) throw e_3.error; }
    }
};
exports.handleEnumOptions = handleEnumOptions;
var buildCompositeId = function (options) {
    var fields = "[".concat(options.fields.join(", "), "]");
    if (!options.map && !options.name)
        return "@@id(".concat(fields, ")");
    var referenceArguments = [["fields", fields]];
    if (options.map)
        referenceArguments.push(["map", options.map]);
    if (options.name)
        referenceArguments.push(["name", options.name]);
    var parsedArguments = referenceArguments
        .map(function (_a) {
        var _b = __read(_a, 2), property = _b[0], value = _b[1];
        return "".concat(property, ": ").concat(value);
    })
        .join(", ");
    return "@@id(".concat(parsedArguments, ")");
};
exports.buildCompositeId = buildCompositeId;
var isCompositeUniqueFields = function (options) { return Array.isArray(options); };
var buildCompositeUnique = function (options) {
    if (isCompositeUniqueFields(options)) {
        return "@@unique([".concat(options.join(", "), "])");
    }
    var fields = "[".concat(options.fields.join(", "), "]");
    var args = [fields];
    if (options.map) {
        args.push("map: \"".concat(options.map, "\""));
    }
    var parsedArguments = args.join(", ");
    return "@@unique(".concat(parsedArguments, ")");
};
exports.buildCompositeUnique = buildCompositeUnique;
var buildModelMap = function (options) {
    var name = typeof options === "string" ? options : options.name;
    return "@@map(\"".concat(name, "\")");
};
exports.buildModelMap = buildModelMap;
