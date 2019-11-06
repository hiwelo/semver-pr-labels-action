import Octokit from "@octokit/rest";
import debug from "debug";

import { getOctokit, GitHubContext } from "./getOctokit";

export const getReleaseByTag = async (
  tag: string
): Promise<Octokit.ReposGetReleaseByTagResponse> => {
  try {
    const { data } = await getOctokit().repos.getReleaseByTag({
      ...GitHubContext,
      tag,
    });

    return data;
  } catch (error) {
    debug(error);
    throw new Error(error);
  }
};
