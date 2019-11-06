import Octokit from "@octokit/rest";

export interface OctokitStore {
  octokit?: Octokit;
  owner?: string;
  repo?: string;
}

export interface OctokitContext {
  owner: string;
  repo: string;
}
