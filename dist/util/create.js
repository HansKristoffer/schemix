"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMixin = exports.createEnum = exports.createModel = void 0;
var __1 = require("../");
var stack_1 = require("../util/stack");
function createModel(param1, param2) {
    if (!__1.schema)
        throw Error("Schema was not initialized.");
    if (typeof param1 === "string" && typeof param2 === "function") {
        var model = __1.schema.createModel(param1);
        setImmediate(param2, model);
        return model;
    }
    if (typeof param1 === "function" && !param2) {
        var model = __1.schema.createModel((0, stack_1.getCallerFileName)());
        setImmediate(param1, model);
        return model;
    }
}
exports.createModel = createModel;
function createEnum(param1, param2) {
    if (!__1.schema)
        throw Error("Schema was not initialized.");
    if (typeof param1 === "string" && typeof param2 === "function") {
        var model = __1.schema.createEnum(param1);
        setImmediate(param2, model);
        return model;
    }
    if (typeof param1 === "function" && !param2) {
        var model = __1.schema.createEnum((0, stack_1.getCallerFileName)());
        setImmediate(param1, model);
        return model;
    }
}
exports.createEnum = createEnum;
function createMixin(callback) {
    if (!__1.schema)
        throw Error("Schema was not initialized.");
    var model = __1.schema.createMixin();
    process.nextTick(callback, model);
    return model;
}
exports.createMixin = createMixin;
