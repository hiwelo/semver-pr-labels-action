import Octokit from "@octokit/rest";

import { getOctokit, GitHubContext } from "./getOctokit";

export const getLatestRelease = async (): Promise<Octokit.ReposGetLatestReleaseResponse> => {
  const { data } = await getOctokit().repos.getLatestRelease({
    ...GitHubContext,
  });

  return data;
};
