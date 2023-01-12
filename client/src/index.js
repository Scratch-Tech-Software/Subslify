
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './assets/styles/NavBar.scss';

import App from './App.jsx';
import { AppProvider } from './context/appContext.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
