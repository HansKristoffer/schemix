"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendModel = void 0;
var __1 = require("../");
var stack_1 = require("../util/stack");
function extendModel(model, param1, param2) {
    if (!__1.schema)
        throw Error("Schema was not initialized.");
    if (typeof param1 === "string" && typeof param2 === "function") {
        var extendedModel = model.extend(param1);
        setImmediate(param2, extendedModel);
        return extendedModel;
    }
    if (typeof param1 === "function" && !param2) {
        var extendedModel = model.extend((0, stack_1.getCallerFileName)());
        setImmediate(param1, extendedModel);
        return extendedModel;
    }
}
exports.extendModel = extendModel;
