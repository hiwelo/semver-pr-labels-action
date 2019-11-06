import Octokit from "@octokit/rest";
import debug from "debug";

import { getOctokit, GitHubContext } from "./getOctokit";

export const getCommit = async (hash: string): Promise<Octokit.ReposGetCommitResponse> => {
  try {
    const { data } = await getOctokit().repos.getCommit({
      ...GitHubContext,
      ref: hash,
    });

    return data;
  } catch (error) {
    debug(error);
    throw new Error(error);
  }
};
