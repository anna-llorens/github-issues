import { useContext } from 'react';
import './App.scss';
import { Search } from './components/search/Search';
import { SearchContext } from './context/SearchContext';
import { IssuesList } from './components/issues/IssuesList';

function App() {
  const { loading } = useContext(SearchContext);
  return (<>

    <div className='header'>
      <Search />
      <h1 className='app-title'> React Github issues finder</h1>
    </div>
    <div className="app">

      {loading ? <h2>Loading . . . </h2> :
        <IssuesList />}
    </div>
  </>
  );
}

export default App;
