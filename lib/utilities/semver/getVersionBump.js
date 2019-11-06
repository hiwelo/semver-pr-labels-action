"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
exports.getVersionBump = (versionBumps) => {
    // early-termination if no version bumps provided
    if (!versionBumps)
        return constants_1.SEMVER_BUMP_OTHER;
    if (versionBumps.includes(constants_1.SEMVER_BUMP_MAJOR))
        return constants_1.SEMVER_BUMP_MAJOR;
    if (versionBumps.includes(constants_1.SEMVER_BUMP_MINOR))
        return constants_1.SEMVER_BUMP_MINOR;
    if (versionBumps.includes(constants_1.SEMVER_BUMP_PATCH))
        return constants_1.SEMVER_BUMP_PATCH;
    return constants_1.SEMVER_BUMP_OTHER;
};
