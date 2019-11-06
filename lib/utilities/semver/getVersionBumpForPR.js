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
const lodash_1 = require("lodash");
const github_1 = require("../github");
const getVersionBump_1 = require("./getVersionBump");
exports.getVersionBumpForPR = (pullRequest) => __awaiter(void 0, void 0, void 0, function* () {
    const labels = yield github_1.getLabelsForPR(pullRequest);
    const versionLabels = lodash_1.remove(labels, label => label.includes("Version:"));
    const versionBumps = versionLabels.map(label => lodash_1.trimStart(label, "Version: ").toLowerCase());
    return getVersionBump_1.getVersionBump(versionBumps);
});
