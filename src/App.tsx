import React from 'react';

import './App.css';
import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
 // const token = "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";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const query = gql`
query  {


  search(query: "repo:facebook/react in:title,body Firefox inspect", type: ISSUE, first: 10) {
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
`
 client.query({query}).then(res => console.log(res.data));


function App() {
  return (
    <div className="App">
      My app 
    </div>
  );
}

export default App;
