"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shell_1 = require("../shell");
exports.getLatestTag = () => {
    return shell_1.exec("git describe --abbrev=0");
};
