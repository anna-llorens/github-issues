import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App, { client } from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>,
);

reportWebVitals();
