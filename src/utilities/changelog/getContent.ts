import { CHANGELOG_CATEGORIES } from "./constants";
import { getAuthorFromSortedCommitList } from "./getAuthorFromSortedCommitList";
import { SortedCommitList } from "./types";
import { VersionBump } from "../semver/types";

export const getContent = (list: SortedCommitList): string => {
  const content: string[] = [];
  const categories = Object.keys(CHANGELOG_CATEGORIES) as VersionBump[];
  const authors = getAuthorFromSortedCommitList(list);

  categories.forEach(category => {
    if (!list[category].length) return;

    content.push(`\n### ${CHANGELOG_CATEGORIES[category]} (${list[category].length})\n`);

    list[category].forEach(commit => {
      content.push(
        `  - [${commit.hash}] ${commit.message} ([${commit.author.login}](${commit.author.url}))`
      );
    });
  });

  if (authors.length) {
    content.push(`\n### 🤓 Authors (${authors.length})\n`);

    authors.forEach(author => {
      content.push(`  - [${author.login}](${author.url})`);
    });
  }

  return content.join("\n");
};
