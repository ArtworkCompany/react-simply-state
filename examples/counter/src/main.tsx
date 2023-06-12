import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';

import { Provider } from '../../../src';
import App from './App.tsx';
import { store } from './store.ts';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
