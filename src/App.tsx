import './App.scss';
import { Search } from './components/search/Search';
import { IssuesList } from './components/issues/IssuesList';

function App() {
  return (<>
    <div className='header'>
      <Search />
    </div>
    <IssuesList />
  </>
  );
}

export default App;
