import { getInput } from "@actions/core";
import Octokit from "@octokit/rest";

import { OctokitContext, OctokitStore } from "./types";

/**
 * Constants for this file only
 */
const STORE: OctokitStore = {
  octokit: undefined,
  owner: undefined,
  repo: undefined,
};

const OctokitConfig = {
  auth: getInput("GITHUB_TOKEN"),
};

export const setupContext = ((): void => {
  const currentRepository = getInput("GITHUB_REPOSITORY").split("/");
  STORE.owner = currentRepository[0];
  STORE.repo = currentRepository[1];

  if (STORE.owner === undefined) throw new Error("PROJECT_OWNER environment variable needed");
  if (STORE.repo === undefined) throw new Error("PROJECT_REPO environment variable needed");
})();

export const GitHubContext: OctokitContext = { owner: STORE.owner, repo: STORE.repo };

export const getOctokit = (): Octokit => {
  if (STORE.octokit === undefined) STORE.octokit = new Octokit({ ...OctokitConfig });

  return STORE.octokit;
};
