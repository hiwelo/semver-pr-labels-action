"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const rest_1 = __importDefault(require("@octokit/rest"));
/**
 * Constants for this file only
 */
const STORE = {
    octokit: undefined,
    owner: undefined,
    repo: undefined,
};
const OctokitConfig = {
    auth: core_1.getInput("GITHUB_TOKEN"),
};
exports.setupContext = (() => {
    const currentRepository = core_1.getInput("GITHUB_REPOSITORY").split("/");
    STORE.owner = currentRepository[0];
    STORE.repo = currentRepository[1];
    if (STORE.owner === undefined)
        throw new Error("PROJECT_OWNER environment variable needed");
    if (STORE.repo === undefined)
        throw new Error("PROJECT_REPO environment variable needed");
})();
exports.GitHubContext = { owner: STORE.owner, repo: STORE.repo };
exports.getOctokit = () => {
    if (STORE.octokit === undefined)
        STORE.octokit = new rest_1.default(Object.assign({}, OctokitConfig));
    return STORE.octokit;
};
