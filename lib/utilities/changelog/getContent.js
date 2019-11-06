"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const getAuthorFromSortedCommitList_1 = require("./getAuthorFromSortedCommitList");
exports.getContent = (list) => {
    const content = [];
    const categories = Object.keys(constants_1.CHANGELOG_CATEGORIES);
    const authors = getAuthorFromSortedCommitList_1.getAuthorFromSortedCommitList(list);
    categories.forEach(category => {
        if (!list[category].length)
            return;
        content.push(`\n### ${constants_1.CHANGELOG_CATEGORIES[category]} (${list[category].length})\n`);
        list[category].forEach(commit => {
            content.push(`  - [${commit.hash}] ${commit.message} ([${commit.author.login}](${commit.author.url}))`);
        });
    });
    if (authors.length) {
        content.push(`\n### 🤓 Authors (${authors.length})\n`);
        authors.forEach(author => {
            content.push(`  - [${author.login}](${author.url})`);
        });
    }
    return content.join("\n");
};
