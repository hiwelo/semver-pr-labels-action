"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
exports.getAuthorFromSortedCommitList = (list) => {
    const lists = Object.keys(list);
    const authors = [];
    lists.forEach(currentList => {
        list[currentList].map(commit => {
            authors.push(commit.author);
        });
    });
    return lodash_1.uniqBy(authors, "login");
};
