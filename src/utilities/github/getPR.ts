import Octokit from "@octokit/rest";

import { getOctokit, GitHubContext } from "./getOctokit";
import { PullRequestID } from "../git/types";

export const getPR = async (pr: PullRequestID): Promise<Octokit.PullsGetResponse> => {
  try {
    const { data } = await getOctokit().pulls.get({
      ...GitHubContext,
      // eslint-disable-next-line @typescript-eslint/camelcase
      pull_number: pr,
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
