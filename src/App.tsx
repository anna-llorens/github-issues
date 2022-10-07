import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import './Search.scss';

import './App.scss';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { buildSearchQuery, IssueState, useSearchQuery } from './graphql/issues-querys';
import { RadioButton } from './components/RadioButton';
import { Button } from './components/Button';

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

function App() {
  const { onSearchTerm, searchResults, loading } = useSearchQuery();
  const [results, setSearchResults] = useState([]);
  const [searchTerm, updateSearchTerm] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const updateSearchResults = () => {
    if (searchResults) {
      setSearchResults(!paymentMethod ?
        searchResults?.filter((result: any) => result?.title) :
        searchResults?.filter((result: any) => result.state === paymentMethod))
    }
  }
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
    state === paymentMethod ?
      setPaymentMethod('') :
      setPaymentMethod(state);
  };

  return (
    <div className="app">
      <div className='search'>
        <input onChange={(e) => updateSearchTerm(e.target.value)}
          value={searchTerm} 
          placeholder={'Search issue'}/>
        <Button onClick={searchIssues}>search</Button>
      </div>

      <div>
        <span className='filterby'>Filter by: </span>
        <RadioButton
          changed={radioChangeHandler}
          id="1"
          isSelected={paymentMethod === IssueState.OPEN}
          label='Open'
          value={IssueState.OPEN}
        />
        <RadioButton
          changed={radioChangeHandler}
          id="2"
          isSelected={paymentMethod === IssueState.CLOSED}
          label="Closed"
          value={IssueState.CLOSED}
        />
      </div>
      {loading ? <h1>Loading . . . </h1> : !results.length ?
        <div>No results found</div> :
        results?.map((app: any) =>
        (<div key={app.number} className='box'>
          <h3>{parse(app.title)}  <span className='issue-number'>#{app.number}</span></h3>
          <div className={`state ${app.state === IssueState.CLOSED ? 'closed' : 'open'} `}>{app.state}</div>
          <a href={app.bodyUrl} target="_blank" rel="noreferrer">Visit on github</a>
          <div>{parse(app.bodyHTML)}</div>
        </div>))}
    </div>
  );
}

export default App;
