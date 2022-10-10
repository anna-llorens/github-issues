import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import './IssuesList.scss'
import { IssueCard } from "./IssueCard";

export const IssuesList = () => {
  const { results } = useContext(SearchContext);
  return !results.length ? <div>No results found</div> :
    results?.map((issue: any) => <IssueCard
      key={issue.number}
      issue={issue} />)
}