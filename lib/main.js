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
const exec_1 = require("@actions/exec");
const semver_1 = require("semver");
const changelog_1 = require("./utilities/changelog");
const git_1 = require("./utilities/git");
const semver_2 = require("./utilities/semver");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const latestTag = git_1.getLatestTag();
        const pendingCommits = yield git_1.getHistorySinceTag(latestTag);
        const sortedCommits = changelog_1.sortByCategories(pendingCommits);
        const versionBump = semver_2.getVersionBumpFromList(sortedCommits);
        if (versionBump === "other")
            return process.exit();
        // Generates new version number
        const versionToRelease = semver_1.inc(latestTag, versionBump);
        // Sets Git user
        exec_1.exec(`npm version ${versionToRelease} --no-git-tag-version`);
        exec_1.exec(`npm publish`);
    });
}
run();
