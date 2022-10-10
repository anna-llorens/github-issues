import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { IssueCard } from "./IssueCard";

export const IssuesList = () => {

  const { results, loading, error } = useContext(SearchContext);

  return <div className='issues-list'>
    {error ? <h1>{error.message}</h1> :
      (loading ? <h1>Loading . . . </h1> :
        (!results.length ? <div>No results found</div> :
          results?.map((issue: any) => <IssueCard
            key={issue.number}
            issue={issue} />)))}
  </div>


} 