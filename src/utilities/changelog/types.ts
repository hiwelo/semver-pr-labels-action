import { DetailedCommit } from "../git/types";

export interface SortedCommitList {
  [key: string]: DetailedCommit[];
}

export interface ChangelogCategories {
  major: string;
  minor: string;
  patch: string;
  other: string;
}

export interface CommitAuthor {
  login?: string;
  url?: string;
}

export type CommitAuthors = CommitAuthor[];
