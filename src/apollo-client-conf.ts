import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});