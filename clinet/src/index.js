import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './store/auth-context';
import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={client}>
    <AuthContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthContextProvider>
  </QueryClientProvider>
);

// ReactDOM.hydrate(<App />, document.getElementById('root'));
