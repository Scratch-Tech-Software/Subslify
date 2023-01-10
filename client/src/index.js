import React from 'react';
import { StrictMode } from 'react-dom';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './assets/styles/index.css';

import App from './App.jsx';
import { AppProvider } from './context/appContext.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
