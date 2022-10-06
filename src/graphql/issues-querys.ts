import { gql, useLazyQuery } from "@apollo/client";

export enum IssueState {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

export const useSearchQuery = () => {
  const [onSearchTerm, { data, loading }] = useLazyQuery(SEARCH_REPO);

  const searchResults =  data?.search.nodes;
  return { onSearchTerm, loading, searchResults};
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
          bodyText
          state
        }
      }
    }
  }
`;
