import { exec } from "../shell";

export const getLatestTag = (): string => {
  return exec("git describe --abbrev=0") as string;
};
