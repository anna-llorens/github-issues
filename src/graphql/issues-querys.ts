import { gql } from "@apollo/client";

export const SEARCH_REPO = gql`
  query search($query: String!) {
    search(query: $query, type: ISSUE, first: 100) {
      nodes {
        ... on Issue {
          number
          title
          state
          bodyUrl
          bodyHTML
        }
      }
    }
  }
`;
