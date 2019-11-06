"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = __importDefault(require("shelljs"));
const constants_1 = require("./constants");
const sanitizeOutput_1 = require("./sanitizeOutput");
exports.exec = (command, formatOutput, additionalFilters) => {
    return sanitizeOutput_1.sanitizeOutput(shelljs_1.default.exec(command, constants_1.SHELL_EXEC_OPTIONS), formatOutput, additionalFilters);
};
