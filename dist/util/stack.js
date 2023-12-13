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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCallerFileName = void 0;
var getCallerFileName = function () {
    var Grabber = Error;
    var grabber = new Error();
    Grabber.prepareStackTrace = function (_, stack) { return stack; };
    var stack = grabber.stack;
    Grabber.prepareStackTrace = undefined;
    var pathSegments = stack === null || stack === void 0 ? void 0 : stack[2].getFileName().split(/[/\\]/);
    var _a = __read(pathSegments[pathSegments.length - 1].split("."), 1), fileName = _a[0];
    return fileName;
};
exports.getCallerFileName = getCallerFileName;
