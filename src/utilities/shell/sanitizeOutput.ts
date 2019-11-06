import { compact, filter, join, split } from "lodash";
import { ShellString } from "shelljs";

import { SHELL_EXEC_RETURN_ARRAY, SHELL_EXEC_RETURN_STRING } from "./constants";
import { ShellResults, ShellResult } from "./types";

export const sanitizeOutput = (
  { stdout }: ShellString,
  formatOutput: ShellResults = "string",
  additionalFilters: string[] = []
): ShellResult => {
  const outputedLines = compact(split(stdout, "\n"));
  let lines: string[];

  lines = filter(outputedLines, line => !line.startsWith("$ "));
  lines = filter(lines, line => !line.startsWith("yarn run "));
  lines = filter(lines, line => !line.startsWith("Done in "));

  if (additionalFilters.length) {
    additionalFilters.forEach(str => (lines = filter(lines, line => !line.startsWith(str))));
  }

  switch (formatOutput) {
    case SHELL_EXEC_RETURN_ARRAY:
      return lines;

    case SHELL_EXEC_RETURN_STRING:
    default:
      return join(lines, "\n");
  }
};
