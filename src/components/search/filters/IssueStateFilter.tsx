import { useContext, useState } from "react";
import { SearchContext } from "../../../context/SearchContext";
import { IssueState } from "../../../types"
import { RadioButton } from "../../button/RadioButton";

const issueStateFilters = [{
  value: IssueState.OPEN,
  label: 'Open'
}, {
  value: IssueState.CLOSED,
  label: 'Closed'
}
]

export const IssueStateFilter = () => {
  const { setIssuesState } = useContext(SearchContext);
  const [filterBy, setFilterBy] = useState('');

  const filterHandler = (event: any) => {
    const state = event.target.value;
    state === filterBy ?
      setFilters('') :
      setFilters(state);
  };

  const setFilters = (state: string) => {
    setFilterBy(state);
    setIssuesState(state);
  }

  return <div>
    <span className='filterby'>Filter by: </span>
    {issueStateFilters.map((filter, index) =>
      <RadioButton key={index} id={index}
        isSelected={filterBy === filter.value}
        label={filter.label}
        value={filter.value}
        changed={filterHandler}
      />)}
  </div>
}