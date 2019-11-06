import { exec, SHELL_EXEC_RETURN_ARRAY } from "../shell";
import { getDetailedCommits } from "./getDetailedCommits";
import { DetailedCommit } from "./types";

export const getHistorySinceTag = async (tag: string): Promise<DetailedCommit[]> => {
  const list = exec(`git log --oneline ${tag}..HEAD`, SHELL_EXEC_RETURN_ARRAY) as string[];

  return getDetailedCommits(list);
};
