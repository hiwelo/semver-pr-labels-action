import { PullRequestID } from "./types";

export const getPRFromMergeCommit = (message: string): PullRequestID | void => {
  const extractedPR = message.match(/(#[0-9]+)/);

  // early-termination if no match
  if (!extractedPR) return;

  return (extractedPR[0].substr(1) as unknown) as number;
};
