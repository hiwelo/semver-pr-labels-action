"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const semver_1 = require("../semver");
exports.sortByCategories = (list) => {
    const sortedList = semver_1.SEMVER_CATEGORIES.map(category => {
        return lodash_1.compact(list.map(commit => (commit.versionBump === category ? commit : false)));
    });
    const associatedList = {};
    semver_1.SEMVER_CATEGORIES.forEach((category, index) => {
        associatedList[category] = sortedList[index];
    });
    return associatedList;
};
