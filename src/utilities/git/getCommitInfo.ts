import { getPRFromMergeCommit } from "./getPRFromMergeCommit";
import { DetailedCommit } from "./types";
import { getCommit } from "../github";
import { getVersionBumpForPR, SEMVER_BUMP_OTHER } from "../semver";

export const getCommitInfo = async (commitMessage: string): Promise<DetailedCommit> => {
  const [hash, ...content] = commitMessage.split(" ");
  const message = content.join(" ");
  const mergeCommit = message.includes("Merge pull request");
  const pullRequest = getPRFromMergeCommit(message) as number;
  const versionBump = pullRequest ? await getVersionBumpForPR(pullRequest) : SEMVER_BUMP_OTHER;
  const commitInfo = await getCommit(hash);

  const author = {
    login: commitInfo.author.login,
    url: commitInfo.author.html_url,
  };

  return {
    hash,
    message,
    mergeCommit,
    versionBump,
    author,
  };
};
