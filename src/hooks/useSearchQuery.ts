import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { SEARCH_REPO } from "../graphql/issues-querys";
import { IssueState } from "../types";

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