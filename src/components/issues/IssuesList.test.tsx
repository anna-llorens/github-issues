
import { screen } from '@testing-library/react';
import { renderWithProvider } from '../../spec/helpers';
import { issue1, issue2 } from '../../spec/mockData';
import { IssuesList } from './IssuesList';

describe('Issues list test cases', () => {
  it('should render 2 issues', async () => {
    renderWithProvider(<IssuesList />, [issue1, issue2])
    // article 1 
    expect(await screen.findByText(issue1.title)).toBeInTheDocument();
    // Article 2
    expect(await screen.findByText(issue2.title)).toBeInTheDocument();
  });
  it('should be loading state', async () => {
    renderWithProvider(<IssuesList />, [], true)
    expect(await screen.findByText('Loading . . .')).toBeInTheDocument();
  });
  it('should not show results', async () => {
    renderWithProvider(<IssuesList />, [])
    expect(await screen.findByText('No results found')).toBeInTheDocument();
  });
});