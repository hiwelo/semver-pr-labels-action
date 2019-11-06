import { compact } from "lodash";

import { SortedCommitList } from "./types";
import { DetailedCommit } from "../git/types";
import { SEMVER_CATEGORIES } from "../semver";

export const sortByCategories = (list: DetailedCommit[]): SortedCommitList => {
  const sortedList = SEMVER_CATEGORIES.map(category => {
    return compact(list.map(commit => (commit.versionBump === category ? commit : false)));
  });
  const associatedList: SortedCommitList = {};

  SEMVER_CATEGORIES.forEach((category, index) => {
    associatedList[category] = sortedList[index];
  });

  return associatedList;
};
