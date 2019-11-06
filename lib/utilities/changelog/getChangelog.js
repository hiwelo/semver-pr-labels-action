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
const sortByCategories_1 = require("./sortByCategories");
const getContent_1 = require("./getContent");
const git_1 = require("../git");
exports.getChangelog = () => __awaiter(void 0, void 0, void 0, function* () {
    const latestTag = git_1.getLatestTag();
    const pendingCommits = yield git_1.getHistorySinceTag(latestTag);
    const sortedCommits = sortByCategories_1.sortByCategories(pendingCommits);
    return getContent_1.getContent(sortedCommits);
});
