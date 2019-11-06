import { sortByCategories } from "./sortByCategories";
import { getContent } from "./getContent";
import { getLatestTag, getHistorySinceTag } from "../git";

export const getChangelog = async (): Promise<string> => {
  const latestTag = getLatestTag();
  const pendingCommits = await getHistorySinceTag(latestTag);
  const sortedCommits = sortByCategories(pendingCommits);

  return getContent(sortedCommits);
};
