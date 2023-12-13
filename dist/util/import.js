"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.importAllFiles = void 0;
var promises_1 = require("fs/promises");
var path_1 = require("path");
var isDirectory = function (fullPath) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, promises_1.stat)(fullPath)];
            case 1: return [2 /*return*/, (_a.sent()).isDirectory()];
        }
    });
}); };
function asyncFilter(arr, predicate) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arr.map(predicate))];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, arr.filter(function (_, index) { return results[index]; })];
            }
        });
    });
}
var getAllFilesRecursively = function (basePath, folderName) { return __awaiter(void 0, void 0, void 0, function () {
    var directoryPath, fileNames, directories, files, filesInDirectories;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                directoryPath = (0, path_1.join)(basePath, folderName);
                return [4 /*yield*/, (0, promises_1.readdir)(directoryPath).catch(function (error) {
                        if (error.code === "ENOENT")
                            return [];
                        throw error;
                    })];
            case 1:
                fileNames = _a.sent();
                return [4 /*yield*/, asyncFilter(fileNames, function (fileName) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, isDirectory((0, path_1.join)(directoryPath, fileName))];
                    }); }); })];
            case 2:
                directories = _a.sent();
                files = fileNames
                    .filter(function (fileName) { return !directories.includes(fileName); })
                    .map(function (file) { return (0, path_1.join)(directoryPath, file); });
                return [4 /*yield*/, Promise.all(directories.map(function (directory) {
                        return getAllFilesRecursively(directoryPath, directory);
                    }))];
            case 3:
                filesInDirectories = (_a.sent()).flat();
                return [2 /*return*/, __spreadArray(__spreadArray([], __read(filesInDirectories), false), __read(files), false)];
        }
    });
}); };
var importFilteredFiles = function (filePaths) {
    return filePaths.reduce(function (accumulator, filePath) {
        if (filePath.endsWith(".d.ts.map") ||
            filePath.endsWith(".d.ts") ||
            filePath.endsWith(".js.map"))
            return accumulator;
        accumulator.push(Promise.resolve().then(function () { return __importStar(require(filePath)); }));
        return accumulator;
    }, []);
};
var importAllFiles = function (basePath, folderName) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, getAllFilesRecursively(basePath, folderName).then(function (files) {
                return Promise.all(importFilteredFiles(files));
            })];
    });
}); };
exports.importAllFiles = importAllFiles;
