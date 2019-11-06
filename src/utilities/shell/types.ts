import { SHELL_EXEC_RETURN_ARRAY, SHELL_EXEC_RETURN_STRING } from "./constants";

export type ShellResult = string | string[];
export type ShellResults = typeof SHELL_EXEC_RETURN_ARRAY | typeof SHELL_EXEC_RETURN_STRING;
