import { createContext, useEffect, useState } from "react";
import { buildSearchQuery, useSearchQuery } from "../hooks/useSearchQuery";

export const SearchContext = createContext<any>({});


export const SearchProvider = ({ children }: any) => {
  const { onSearchTerm, searchResults, loading } = useSearchQuery();
  const [results, setSearchResults] = useState([]);
  const [issueState, setIssuesState] = useState('');

  const updateSearchResults = () => {
    if (searchResults) {
      setSearchResults(!issueState ?
        searchResults?.filter((result: any) => result?.title) :
        searchResults?.filter((result: any) => result.state === issueState))
    }
  }

  useEffect(() => {
    updateSearchResults();
  }, [searchResults, issueState]);

  const searchIssues = (searchTerm: string) => {
    setSearchResults([])
    onSearchTerm({ variables: { query: buildSearchQuery(searchTerm) } });
    updateSearchResults();
  }


  return <SearchContext.Provider
    value={{
      results,
      setIssuesState,
      loading,
      searchIssues
    }}>{children}
  </SearchContext.Provider>
}

