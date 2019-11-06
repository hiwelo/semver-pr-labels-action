import { VersionBump } from "./types";

export const SEMVER_BUMP_MAJOR = "major";
export const SEMVER_BUMP_MINOR = "minor";
export const SEMVER_BUMP_PATCH = "patch";
export const SEMVER_BUMP_OTHER = "other";

export const SEMVER_CATEGORIES: VersionBump[] = [
  SEMVER_BUMP_MAJOR,
  SEMVER_BUMP_MINOR,
  SEMVER_BUMP_PATCH,
  SEMVER_BUMP_OTHER,
];
