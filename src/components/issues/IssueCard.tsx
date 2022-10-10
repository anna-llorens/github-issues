import { IssueState } from "../../types";
import parse from 'html-react-parser';
import { useState } from "react";
import './IssueCard.scss';


export const IssueCard = ({ issue }: any) => {
  const [collapse, setCollapse] = useState(false);

  return (<div className={`box crop-content `}>
    <div className={`content ${!collapse ? 'crop' : ''}`}>
      <div className="header">
        <span className={`state ${issue.state === IssueState.CLOSED ? 'closed' : 'open'} `}>{issue.state}</span>
        <span className="title">{parse(issue?.title)} </span>
        <span className='issue-number'>#{issue.number}</span>
      </div>
        <div className="toggle-container">
          <span className='link' onClick={() => setCollapse(!collapse)}> Show {!collapse ? 'more' : 'less'}</span>
        </div>
      <h3>Description</h3>
      <div>{parse(issue.bodyHTML)}</div>
      <a href={issue.bodyUrl} target="_blank" rel="noreferrer">Visit on github</a>
    </div>
  </div>)
}