import { exec } from "@actions/exec";
import { inc } from "semver";
import { getContent, sortByCategories } from "./utilities/changelog";
import { getHistorySinceTag, getLatestTag } from "./utilities/git";
import { getReleaseByTag, updateRelease } from "./utilities/github";
import { getVersionBumpFromList } from "./utilities/semver";

async function run() {
  const latestTag = getLatestTag();
  const pendingCommits = await getHistorySinceTag(latestTag);
  const sortedCommits = sortByCategories(pendingCommits);
  const changelog = getContent(sortedCommits);
  const versionBump = getVersionBumpFromList(sortedCommits);

  if (versionBump === "other") return process.exit();

  // Generates new version number
  const versionToRelease = inc(latestTag, versionBump);

  if (!versionToRelease) return process.exit();

  // Publishes the package
  exec(`npm version ${versionToRelease} --no-git-tag-version`);
  exec(`npm publish`);

  // Publishes the changelog
  const latestRelease = await getReleaseByTag(versionToRelease);
  await updateRelease(latestRelease, changelog);

  return process.exit();
}

run();
