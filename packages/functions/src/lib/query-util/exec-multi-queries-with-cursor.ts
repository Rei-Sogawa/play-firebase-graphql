import { first as head, uniqBy } from "lodash";

export type Edge<T> = {
  node: T;
  cursor: string;
};

export const execMultiQueriesWithCursor = async <T extends { id: string }>(
  queries: (({ after }: { after: string }) => Promise<Edge<T>[]>)[],
  order: (edges: Edge<T>[]) => Edge<T>[],
  { first, after }: { first: number; after: string }
): Promise<Edge<T>[]> => {
  let res: Edge<T>[] = [];

  const candidatesList = await Promise.all(queries.map((query) => query({ after })));

  let i = 0;
  while (i < first) {
    const headCandidate = head(order(candidatesList.flat()));
    if (!headCandidate) return res;

    res = uniqBy([...res, headCandidate], (v) => v.node.id);

    const headIndex = candidatesList.findIndex((edges) => head(edges) === headCandidate);
    if (headIndex < 0 || queries.length < headIndex) throw new Error("not found headIndex");

    const headQuery = queries[headIndex];
    const newCandidates = await headQuery({ after: headCandidate.cursor });
    candidatesList[headIndex] = newCandidates;

    i++;
  }

  return res;
};
