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
Object.defineProperty(exports, "__esModule", { value: true });
const shell_1 = require("../shell");
const getDetailedCommits_1 = require("./getDetailedCommits");
exports.getHistorySinceTag = (tag) => __awaiter(void 0, void 0, void 0, function* () {
    const list = shell_1.exec(`git log --oneline ${tag}..HEAD`, shell_1.SHELL_EXEC_RETURN_ARRAY);
    return getDetailedCommits_1.getDetailedCommits(list);
});
