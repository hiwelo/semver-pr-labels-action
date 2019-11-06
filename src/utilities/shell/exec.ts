import shelljs from "shelljs";

import { SHELL_EXEC_OPTIONS } from "./constants";
import { sanitizeOutput } from "./sanitizeOutput";
import { ShellResult, ShellResults } from "./types";

export const exec = (
  command: string,
  formatOutput?: ShellResults,
  additionalFilters?: string[]
): ShellResult => {
  return sanitizeOutput(shelljs.exec(command, SHELL_EXEC_OPTIONS), formatOutput, additionalFilters);
};
