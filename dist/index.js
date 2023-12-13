"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaSchema = exports.PrismaEnum = exports.PrismaModel = exports.extendModel = exports.createModel = exports.createEnum = exports.createMixin = exports.createSchema = exports.schema = void 0;
var PrismaSchema_1 = require("./modules/PrismaSchema");
Object.defineProperty(exports, "PrismaSchema", { enumerable: true, get: function () { return PrismaSchema_1.PrismaSchema; } });
/**
 * Create a Prisma schema object.
 * @param props.datasource The datasource object information for Prisma.
 * @param props.generator The generator object information for Prisma.
 * @param props.basePath The base path for the schema object, optional if you want a purely programmatically generated schema.
 * @param props.additionalPaths The path for a secondary location for the schema objects. Will not be searched if basePath is empty.
 * @returns The generated schema object.
 */
var createSchema = function (_a) {
    var datasource = _a.datasource, generator = _a.generator, basePath = _a.basePath, additionalPaths = _a.additionalPaths;
    if (typeof basePath === "undefined") {
        return new PrismaSchema_1.PrismaSchema(datasource, generator);
    }
    if (Array.isArray(additionalPaths)) {
        exports.schema = new PrismaSchema_1.PrismaSchema(datasource, generator, basePath, additionalPaths);
    }
    else {
        exports.schema = new PrismaSchema_1.PrismaSchema(datasource, generator, basePath);
    }
    return exports.schema;
};
exports.createSchema = createSchema;
var create_1 = require("./util/create");
Object.defineProperty(exports, "createMixin", { enumerable: true, get: function () { return create_1.createMixin; } });
Object.defineProperty(exports, "createEnum", { enumerable: true, get: function () { return create_1.createEnum; } });
Object.defineProperty(exports, "createModel", { enumerable: true, get: function () { return create_1.createModel; } });
var extend_1 = require("./util/extend");
Object.defineProperty(exports, "extendModel", { enumerable: true, get: function () { return extend_1.extendModel; } });
var PrismaModel_1 = require("./modules/PrismaModel");
Object.defineProperty(exports, "PrismaModel", { enumerable: true, get: function () { return PrismaModel_1.PrismaModel; } });
var PrismaEnum_1 = require("./modules/PrismaEnum");
Object.defineProperty(exports, "PrismaEnum", { enumerable: true, get: function () { return PrismaEnum_1.PrismaEnum; } });
