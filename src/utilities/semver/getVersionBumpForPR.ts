import { remove, trimStart } from "lodash";

import { VersionBump } from "./types";
import { PullRequestID } from "../git/types";
import { getLabelsForPR } from "../github";
import { getVersionBump } from "./getVersionBump";

export const getVersionBumpForPR = async (pullRequest: PullRequestID): Promise<VersionBump> => {
  const labels = await getLabelsForPR(pullRequest);
  const versionLabels = remove(labels, label => label.includes("Version:"));
  const versionBumps = versionLabels.map(label => trimStart(label, "Version: ").toLowerCase());

  return getVersionBump(versionBumps);
};
