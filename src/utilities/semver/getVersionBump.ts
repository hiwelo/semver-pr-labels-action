import {
  SEMVER_BUMP_MAJOR,
  SEMVER_BUMP_MINOR,
  SEMVER_BUMP_PATCH,
  SEMVER_BUMP_OTHER,
} from "./constants";
import { VersionBump } from "./types";

export const getVersionBump = (versionBumps?: string[]): VersionBump => {
  // early-termination if no version bumps provided
  if (!versionBumps) return SEMVER_BUMP_OTHER;

  if (versionBumps.includes(SEMVER_BUMP_MAJOR)) return SEMVER_BUMP_MAJOR;
  if (versionBumps.includes(SEMVER_BUMP_MINOR)) return SEMVER_BUMP_MINOR;
  if (versionBumps.includes(SEMVER_BUMP_PATCH)) return SEMVER_BUMP_PATCH;

  return SEMVER_BUMP_OTHER;
};
