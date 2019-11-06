"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPRFromMergeCommit = (message) => {
    const extractedPR = message.match(/(#[0-9]+)/);
    // early-termination if no match
    if (!extractedPR)
        return;
    return extractedPR[0].substr(1);
};
