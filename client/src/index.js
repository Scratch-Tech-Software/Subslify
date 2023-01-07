import React from 'react';
import { StrictMode } from 'react-dom';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import App from './App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
