import { useEffect, useState } from 'react';

import './App.css';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { buildSearchQuery, IssueState, useSearchQuery } from './graphql/issues-querys';
import { RadioButton } from './components/RadioButton';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = "";
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  const { onSearchTerm, searchResults, loading } = useSearchQuery();
  const [results, setSearchResults] = useState([]);
  const [searchTerm, updateSearchTerm] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const updateSearchResults = () => {
    if (searchResults) {
      setSearchResults(searchResults?.filter((result: any) => result?.title));
      if (paymentMethod === 'Closed') {
        setSearchResults(searchResults?.filter((result: any) => result.state === IssueState.CLOSED));
        console.log(results);
      }
      if (paymentMethod === 'Open') {
        setSearchResults(searchResults?.filter((result: any) => result.state === 'OPEN'));
        console.log(results);
      }
    }
  }

  // First time renders latest React issue
  useEffect(() => {
    onSearchTerm({ variables: { query: buildSearchQuery('') } });
  }, []);

  useEffect(() => {
    updateSearchResults();
  }, [searchResults, paymentMethod]);

  const searchIssues = () => {
    setSearchResults([])
    onSearchTerm({ variables: { query: buildSearchQuery(searchTerm) } });
    updateSearchResults();
  }
  const radioChangeHandler = (e: any) => {
    const state = e.target.value;
    debugger;
    if (state === paymentMethod) {
      setPaymentMethod('');
    }
    else {
      setPaymentMethod(state)
    }
  };
  console.log(paymentMethod, 'paymentMethod');
  console.log(results, 'paymentMethod');

  return (
    <div className="App">
      <input onChange={(e) => updateSearchTerm(e.target.value)} value={searchTerm}></input>
      <button onClick={searchIssues}>search</button>
      <div>
    <div>Filter by: </div>
      <RadioButton
        changed={radioChangeHandler}
        id="1"
        isSelected={paymentMethod === "Open"}
        label="Open"
        value="Open"
      />
      <RadioButton
        changed={radioChangeHandler}
        id="2"
        isSelected={paymentMethod === "Closed"}
        label="Closed"
        value="Closed"
      />
      </div>
      {loading ? <h1>Loading . . . </h1> : !results.length ?
        <div>No results found</div> :
        results?.map((app: any, index: number) =>
        (<div key={app.number} className='box'>
          <div>{app.title}</div>
          <div>{app.number}</div>
          <div>{app.state}</div>
          <div>{app.bodyText}</div>
        </div>))}
    </div>
  );
}

export default App;
