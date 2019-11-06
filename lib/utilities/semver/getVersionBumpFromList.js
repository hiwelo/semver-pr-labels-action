"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVersionBumpFromList = (commitList) => {
    if (commitList.major.length)
        return "major";
    if (commitList.minor.length)
        return "minor";
    if (commitList.patch.length)
        return "patch";
    return "other";
};
