import Octokit from "@octokit/rest";
import debug from "debug";

import { getOctokit, GitHubContext } from "./getOctokit";

export const updateRelease = async (
  release: Octokit.ReposGetReleaseByTagResponse,
  changelog: string
): Promise<Octokit.ReposUpdateReleaseResponse> => {
  try {
    const { data } = await getOctokit().repos.updateRelease({
      ...GitHubContext,
      release_id: release.id,
      name: `Castor Design System v${release.tag_name}`,
      body: changelog,
    });

    return data;
  } catch (error) {
    debug(error);
    throw new Error(error);
  }
};
