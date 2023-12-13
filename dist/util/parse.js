"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStringOrObject = void 0;
var parseStringOrObject = function (toParse) {
    var type = typeof toParse;
    if (type === "string")
        return toParse;
    else
        return JSON.stringify(toParse).replace(/"/g, '\\"');
};
exports.parseStringOrObject = parseStringOrObject;
