import { SortedCommitList } from "../changelog/types";
import { VersionBump } from "./types";

export const getVersionBumpFromList = (commitList: SortedCommitList): VersionBump => {
  if (commitList.major.length) return "major";
  if (commitList.minor.length) return "minor";
  if (commitList.patch.length) return "patch";

  return "other";
};
