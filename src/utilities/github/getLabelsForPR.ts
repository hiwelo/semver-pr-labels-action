import { getPR } from "./getPR";
import { PullRequestID } from "../git/types";

export const getLabelsForPR = async (pr: PullRequestID): Promise<string[]> => {
  const { labels } = await getPR(pr);

  return labels.map(label => label.name);
};
