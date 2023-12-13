"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaSchema = void 0;
var PrismaModel_1 = require("../modules/PrismaModel");
var PrismaEnum_1 = require("../modules/PrismaEnum");
var export_1 = require("../util/export");
var blocks_1 = require("../util/blocks");
var import_1 = require("../util/import");
var PrismaSchema = /** @class */ (function () {
    function PrismaSchema(datasource, generator, basePath, additionalPaths) {
        this.datasource = datasource;
        this.generator = generator;
        this.basePath = basePath;
        this.additionalPaths = additionalPaths;
        this.enums = new Map();
        this.models = new Map();
    }
    /**
     * Parses a datasource block for the schema using the parameters
     * provided in the constructor.
     * @returns A string representing the datasource block.
     */
    PrismaSchema.prototype.parseDataSource = function () {
        return (0, blocks_1.parseKeyValueBlock)("datasource", "database", Object.entries(this.datasource));
    };
    /**
     * Parses a generator block for the schema using the parameters
     * provided in the constructor.
     * @returns A string representing the generator block.
     */
    PrismaSchema.prototype.parseGenerator = function () {
        var generators = Array.isArray(this.generator)
            ? this.generator
            : [this.generator];
        return generators
            .map(function (_a) {
            var _b = _a.name, name = _b === void 0 ? "client" : _b, generator = __rest(_a, ["name"]);
            return (0, blocks_1.parseKeyValueBlock)("generator", name, Object.entries(generator));
        })
            .join("\n\n");
    };
    /**
     * Creates a mixin and automatically attaches it to the schema.
     * @returns The `PrismaModel` object.
     */
    PrismaSchema.prototype.createMixin = function () {
        var model = new PrismaModel_1.PrismaModel(null, this);
        return model;
    };
    /**
     * Creates a `PrismaModel` object and automatically attaches it to the schema.
     * @param modelName The name of the model.
     * @returns The `PrismaModel` object.
     */
    PrismaSchema.prototype.createModel = function (modelName) {
        var model = new PrismaModel_1.PrismaModel(modelName, this);
        this.models.set(modelName, model);
        return model;
    };
    /**
     * Creates a `PrismaEnum` object and automatically attaches it to the schema.
     * @param enumName The name of the enum.
     * @returns The `PrismaEnum` object.
     */
    PrismaSchema.prototype.createEnum = function (enumName) {
        var prismaEnum = new PrismaEnum_1.PrismaEnum(enumName);
        this.enums.set(enumName, prismaEnum);
        return prismaEnum;
    };
    /**
     * Parses the schema into a singular schema string.
     * @returns Returns a singular schema string.
     */
    PrismaSchema.prototype.toString = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.basePath) return [3 /*break*/, 4];
                        return [4 /*yield*/, (0, import_1.importAllFiles)(this.basePath, "enums")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, (0, import_1.importAllFiles)(this.basePath, "models")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, (0, import_1.importAllFiles)(this.basePath, "mixins")];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!this.additionalPaths) return [3 /*break*/, 6];
                        return [4 /*yield*/, Promise.all(this.additionalPaths.map(function (path) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, (0, import_1.importAllFiles)(path, "prisma")];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        process.nextTick(function () {
                            var models = __spreadArray(__spreadArray([
                                _this.parseDataSource(),
                                _this.parseGenerator()
                            ], __read(_this.enums.values()), false), __read(_this.models.values()), false);
                            Promise.all(models.map(function (model) { return model.toString(); })).then(function (stringModels) {
                                var schemaString = stringModels.join("\n\n") + "\n";
                                resolve(schemaString);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * Exports the schema to the provided filepath/filename.
     * @param filepath The target filepath.
     * @param filename The target filename.
     */
    PrismaSchema.prototype.export = function (filepath, filename) {
        (0, export_1.exportSchema)(filepath, filename, this);
    };
    return PrismaSchema;
}());
exports.PrismaSchema = PrismaSchema;
