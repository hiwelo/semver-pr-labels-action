import { exec } from "@actions/exec";
import { inc } from "semver";
import { sortByCategories } from "./utilities/changelog";
import { getHistorySinceTag, getLatestTag } from "./utilities/git";
import { getVersionBumpFromList } from "./utilities/semver";

async function run() {
  const latestTag = getLatestTag();
  const pendingCommits = await getHistorySinceTag(latestTag);
  const sortedCommits = sortByCategories(pendingCommits);
  const versionBump = getVersionBumpFromList(sortedCommits);

  if (versionBump === "other") return process.exit();

  // Generates new version number
  const versionToRelease = inc(latestTag, versionBump);

  // Sets Git user
  exec(`npm version ${versionToRelease} --no-git-tag-version`);
  exec(`npm publish`);
}

run();
