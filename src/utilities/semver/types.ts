import {
  SEMVER_BUMP_MAJOR,
  SEMVER_BUMP_MINOR,
  SEMVER_BUMP_PATCH,
  SEMVER_BUMP_OTHER,
} from "./constants";

export type VersionBump =
  | typeof SEMVER_BUMP_MAJOR
  | typeof SEMVER_BUMP_MINOR
  | typeof SEMVER_BUMP_PATCH
  | typeof SEMVER_BUMP_OTHER;
