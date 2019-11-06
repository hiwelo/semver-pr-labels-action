import { VersionBump } from "../semver/types";

export interface DetailedCommit {
  hash: string;
  message: string;
  mergeCommit?: boolean;
  versionBump?: VersionBump;
  author: {
    name?: string;
    email?: string;
    login?: string;
    url?: string;
  };
}

export type PullRequestID = number;
