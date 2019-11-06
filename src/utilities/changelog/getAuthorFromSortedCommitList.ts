import { uniqBy } from "lodash";

import { CommitAuthors, SortedCommitList } from "./types";

export const getAuthorFromSortedCommitList = (list: SortedCommitList): CommitAuthors => {
  const lists = Object.keys(list);
  const authors: CommitAuthors = [];

  lists.forEach(currentList => {
    list[currentList].map(commit => {
      authors.push(commit.author);
    });
  });

  return uniqBy(authors, "login");
};
