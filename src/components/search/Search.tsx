import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { Button } from "../button/Button";
import { IssueStateFilter } from "./filters/IssueStateFilter";
import './Search.scss';


export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {searchIssues} = useContext(SearchContext)

  return  <div>
   <div className='search'>
    <input onChange={(e) => setSearchTerm(e.target.value)}
      value={searchTerm}
      placeholder={'Search issue'} />
    <Button onClick={() =>searchIssues(searchTerm)}>Search</Button>
  </div>

  <IssueStateFilter />
</div>
}