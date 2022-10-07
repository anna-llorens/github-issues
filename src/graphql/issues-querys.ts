import { gql, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";

export enum IssueState {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

export const useSearchQuery = () => {
  const [onSearchTerm, { data, loading, error }] = useLazyQuery(SEARCH_REPO, { variables: { query: buildSearchQuery("") } });
  const searchResults = data?.search.nodes;
  useEffect(() => {
    onSearchTerm();
  }, []);
  return { onSearchTerm, searchResults, loading, error };
};

export const buildSearchQuery = (searchTerm: String, state?: IssueState) =>
  `repo:facebook/react ${state ? ` state:${state} ` : ""}
    in:body,title ${searchTerm}`;

const SEARCH_REPO = gql`
  query anna($query: String!) {
    search(query: $query, type: ISSUE, first: 100) {
      nodes {
        ... on Issue {
          number
          title
          state
          bodyUrl
          createdAt
          bodyHTML
        }
      }
    }
  }
`;
