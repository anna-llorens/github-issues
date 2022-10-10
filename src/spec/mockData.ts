import { SEARCH_REPO } from "../graphql/issues-querys";
export const issue1 = {
  bodyHTML: "this is the description",
  bodyUrl: "www.google.com",
  number: "1111",
  state: "OPEN",
  title: "title 1",
};
export const issue2 = {
  bodyHTML: "this is the description 2",
  bodyUrl: "www.google.com",
  number: "1111",
  state: "OPEN",
  title: "title 2",
};

export const mockSearchQuery = [
  {
    request: {
      query: SEARCH_REPO,
      variables: {
        query: "",
      },
    },
    result: {
      data: {
        search: { nodes: [issue1, issue2] },
      },
    },
  },
];

export const mockSearchContext = (results=  [], loading = false ) => {
  return {
    results,
    setIssuesState: jest.fn(),
    loading,
    searchIssues: jest.fn(),
  };
};
