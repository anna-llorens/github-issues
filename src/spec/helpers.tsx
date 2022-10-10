import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { SearchContext } from '../context/SearchContext';
import {  mockSearchContext, mockSearchQuery } from './mockData';

const context = (component: JSX.Element) => 
<SearchContext.Provider value={mockSearchContext}>
  {component}
</SearchContext.Provider>;

export const renderComponentWithContext = (component: JSX.Element) =>
  render(context(component));


export const renderWithProvider = (component: any, results?: any, loading?: boolean) => {
  const {container} = render(
    <MockedProvider mocks={mockSearchQuery} addTypename={false}>
      <SearchContext.Provider value={mockSearchContext(results, loading)}>
        {component}
      </SearchContext.Provider>
    </MockedProvider>
  );
  return {container};
}
