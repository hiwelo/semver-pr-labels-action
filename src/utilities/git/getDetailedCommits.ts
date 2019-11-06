import { getCommitInfo } from "./getCommitInfo";
import { DetailedCommit } from "./types";

export const getDetailedCommits = async (list: string[]): Promise<DetailedCommit[]> => {
  return await Promise.all(list.map(commit => getCommitInfo(commit)));
};
