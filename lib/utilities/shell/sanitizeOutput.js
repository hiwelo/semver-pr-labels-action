"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const constants_1 = require("./constants");
exports.sanitizeOutput = ({ stdout }, formatOutput = "string", additionalFilters = []) => {
    const outputedLines = lodash_1.compact(lodash_1.split(stdout, "\n"));
    let lines;
    lines = lodash_1.filter(outputedLines, line => !line.startsWith("$ "));
    lines = lodash_1.filter(lines, line => !line.startsWith("yarn run "));
    lines = lodash_1.filter(lines, line => !line.startsWith("Done in "));
    if (additionalFilters.length) {
        additionalFilters.forEach(str => (lines = lodash_1.filter(lines, line => !line.startsWith(str))));
    }
    switch (formatOutput) {
        case constants_1.SHELL_EXEC_RETURN_ARRAY:
            return lines;
        case constants_1.SHELL_EXEC_RETURN_STRING:
        default:
            return lodash_1.join(lines, "\n");
    }
};
