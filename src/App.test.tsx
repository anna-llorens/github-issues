
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProvider } from './spec/helpers';

describe('Issues list test cases', () => {
it('should render correctly the app', async () => {
    renderWithProvider(<App/> );
    expect(screen.getByRole('button')).toHaveTextContent('Search');
    expect(await screen.findByText('No results found')).toBeInTheDocument();
  });
});